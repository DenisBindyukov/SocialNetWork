import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import store from './Redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const RerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));


}

RerenderEntireTree();

store.subscribe(RerenderEntireTree);

serviceWorker.unregister();