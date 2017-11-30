import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppContainer } from 'react-hot-loader'
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            {routes}
        </AppContainer>
    </Provider>
    ,
        document.getElementById('root')

);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
        const routes = require('./routes').default;
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    {routes}
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    });
}