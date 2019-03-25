import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi, getData } from "../../api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    };

    /**
     * 1. api 요청을 처리할 수 있음
     * 2. 각각의 요청을 분리된 함수로 작성하여 처리할 수 있음.
     */
    async componentDidMount() {
        try {
            const nowPlaying = getData(await moviesApi.nowPlaying());
            const upcoming = getData(await moviesApi.upcoming());
            const popular = getData(await moviesApi.popular());

            this.setState({
                nowPlaying,
                upcoming,
                popular,
            })
        } catch (e) {
            this.setState({
                error: 'Can\'t find movies information',
            })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const {
            nowPlaying,
            upcoming,
            popular,
            error,
            loading,
        } = this.state;

        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}