import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import eventReducer from './event-reducer';

export default combineReducers({
    routing: routerReducer,
    event: eventReducer,
});
