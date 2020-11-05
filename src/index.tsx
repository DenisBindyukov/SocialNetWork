import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import store from './Redux/redux-store';
import {BrowserRouter} from "react-router-dom";

const RerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));


}

RerenderEntireTree();

store.subscribe(RerenderEntireTree);

serviceWorker.unregister();