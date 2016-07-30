import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

export default function configureStore(initialState) {
    let middleware = [
        thunk,
        routerMiddleware(browserHistory),
    ];

    // Only include the logger in development
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger()];
    }

    const hasDevTools = typeof window === 'object'
        && typeof window.devToolsExtension !== 'undefined';

    const createStoreWithMiddleware = compose(
        applyMiddleware(...middleware),
        hasDevTools ? window.devToolsExtension() : f => f
    )(createStore);

    return createStoreWithMiddleware(rootReducer, initialState);
}
