import { CHANGE_TEXT, BUTTON_CLICK } from './actions';
import { combineReducers } from 'redux';

const initialState = {
    text: 'Hello'
}

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_TEXT:
            return {
                text: state.text === 'Hello' ? 'World' : 'Hello'
            }
        case BUTTON_CLICK:
            return {
                text: 'Hello World!'
            }
        default:
            return initialState;
    }
}

export default myReducer;