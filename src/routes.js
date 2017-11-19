import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'containers/App/App';
import Home from 'containers/Home/Home';
import Dashboard from 'containers/Dashboard/Dashboard';

export default (
    <BrowserRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard} />
        </App>
    </BrowserRouter>
);