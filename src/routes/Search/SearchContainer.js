import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi, getData} from "../../api";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: '',
        error: null,
        loading: true,
    };

    handleSubmit = event => {
        event.preventDefault();
        const { searchTerm } = this.state;
        (searchTerm !== '') && this.searchByTerm();
    };

    updateSearchTerm = event => {
        const { target: {value}} = event;
        this.setState({
            searchTerm: value,
        })
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try {
            const movieResults = getData(await moviesApi.search(searchTerm));
            const tvResults = getData(await tvApi.search(searchTerm));
            this.setState({
                movieResults,
                tvResults,
                loading: true,
            })
        } catch {
            this.setState({
                error: 'Can\'t find results',
            })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const {
            movieResults,
            tvResults,
            searchTerm,
            error,
            loading,
        } = this.state;

        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateSearchTerm={this.updateSearchTerm}
            />
        );
    }
}