import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import HomePage from './components/HomePage.react';
import LoginPage from './containers/LoginPage';
import LogoutPage from './containers/LogoutPage';
import ProfilePage from './containers/ProfilePage';
import {routerActions} from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: (state) => state.auth.isAuthenticated,
    wrapperDisplayName: 'UserIsAuthenticated'
})


// import ProfileContainer from './containers/ProfileContainer';
// import RegistrationContainer from './containers/RegistrationContainer';
// import NotFoundPage from './components/NotFoundPage.react';
// import {routerActions} from 'react-router-redux';
// import {UserAuthWrapper} from 'redux-auth-wrapper';

// Redirects to /login by default
// const userIsAuthenticated = UserAuthWrapper({ // eslint-disable-line babel/new-cap
//     authSelector: (state) => state.auth, // how to get the user state
//     predicate: (user) => user.isAuthenticated, // function to run against the user state to determine is authenticated
//     redirectAction: routerActions.replace, // the redux action to dispatch for redirect
//     wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check,
// });

export default (
    <BrowserRouter>
        <App>
            <Route exact path="/" component={HomePage}/>
            <Route path="/dashboard" component={Dashboard} />
            {/*<Route path="/about" component={AboutPage} />*/}
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />

            <Route path="/profile" component={userIsAuthenticated(ProfilePage)}/>
            {/*<Route path="/profile" component={ProfileContainer} />*/}
            {/*<Route path="/register" component={RegistrationContainer} />*/}
            {/*<Route path="*" component={NotFoundPage} />*/}
        </App>
    </BrowserRouter>
);