import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './reducers';

let store = createStore(myReducer);

ReactDOM.render(
    <Provider store={store}>
        <App foo={20}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
