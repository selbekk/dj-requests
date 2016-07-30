import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './stores/create-store';

import { routes } from './routes';

const initialState = window.INITIAL_STATE;
const store = createStore(initialState);

const enhancedHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={enhancedHistory} />
    </Provider>,
    document.getElementById('app')
);
