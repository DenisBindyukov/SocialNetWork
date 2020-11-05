import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar.tsx/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialog from "./Component/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Setting from "./Component/Setting/Setting";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import {StoreType} from "./Redux/redux-store";
import {DialogsContainer} from "./Component/Dialogs/DialogsContainer";


type AppType = {
    store: StoreType
}

function App(props: AppType) {

   // const state = props.store.getState();

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() =>
                    <Profile store={props.store}/>}/>
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path={'/setting'} render={() => <Setting/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
