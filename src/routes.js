import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'containers/App/App';
import Dashboard from 'containers/Dashboard/Dashboard';
import AboutPage from './components/AboutPage.react.js';
import HomePage from './components/HomePage.react';
import LoginPage from './containers/LoginPage';
import LogoutPage from './containers/LogoutPage';
import ProfileContainer from './containers/ProfileContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import NotFoundPage from './components/NotFoundPage.react.js';
export default (
    <BrowserRouter>
        <App>
            <Route exact path="/" component={HomePage}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={Dashboard} />
            <Route path="/login" component={Dashboard} />
            <Route path="/logout" component={Dashboard} />
            <Route path="/profile" component={Dashboard} />
            <Route path="/register" component={Dashboard} />
            <Route path="*" component={NotFoundPage} />
        </App>
    </BrowserRouter>
);