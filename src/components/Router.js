import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from 'routes/Home';
import TV from 'routes/TV';
import Search from 'routes/Search';
import Detail from 'routes/Detail';

export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/detail" component={Detail} />
        </>
    </Router>
)
