import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi, getData} from "../../api";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: 'code',
        error: null,
        loading: true,
    };

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if (searchTerm !== '') {
            this.searchByTerm();
        }
    };

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
            />
        );
    }
}