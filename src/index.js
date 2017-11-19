import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppContainer } from 'react-hot-loader'
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <AppContainer>
        {routes}
    </AppContainer>,
    document.getElementById('root')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
        const routes = require('./routes').default;
        ReactDOM.render(
            <AppContainer>
                {routes}
            </AppContainer>,
            document.getElementById('root')
        );
    });
}