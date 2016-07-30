import * as actions from '../actions/event-actions';

function setName(state, action) {
    return Object.assign({}, state, { name: action.name });
}

const initialState = {
    name: '',
};

export default function eventReducer(state = initialState, action) {
    switch (action.type) {
    case actions.SET_NAME:
        return setName(state, action);
    default:
        return state;
    }
}
