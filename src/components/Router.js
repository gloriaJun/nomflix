import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Header from 'components/Header';
import Home from 'routes/Home';
import TV from 'routes/TV';
import Search from 'routes/Search';
import Detail from 'routes/Detail';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/detail" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)
