import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import CheeseList from './component/cheese-list';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { cheeseReducer } from './reducers/cheese';

const store = createStore(cheeseReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <CheeseList />
    </Provider>, document.getElementById('root')
    );
registerServiceWorker();