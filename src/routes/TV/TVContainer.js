import React from 'react';
import TVPresenter from './TVPresenter';
import {tvApi, getData} from "../../api";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const topRated = getData(await tvApi.topRated());
            const popular = getData(await tvApi.popular());
            const airingToday = getData(await tvApi.airingToday());

            this.setState({
                topRated,
                popular,
                airingToday,
            })
        } catch (e) {
            this.setState({
                error: 'Can\'t find tvs information',
            })
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const {
            topRated,
            popular,
            airingToday,
            error,
            loading,
        } = this.state;

        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        );
    }
}