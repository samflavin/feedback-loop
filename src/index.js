import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



const responseList = (state = {}, action) => {

    if (action.type === `ADD_NEWFEELING`) {
        // MUST return a new array, don't push...
        return {...state, feeling: action.payload.feeling}
    } if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload.understanding };
    }
    if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload.support };
    }
    if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload.comments };
    }
    if (action.type === 'CLEAR') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        // all reducers will go here...
        responseList
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
