import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar.tsx/Navbar";
import Profile from "./Component/Profile/Profile";
import {Route} from "react-router-dom";
import Setting from "./Component/Setting/Setting";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import {DialogsContainer} from "./Component/Dialogs/DialogsContainer";
import {UserContainer} from "./Component/User/UserContainer";


function App() {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() =>
                    <Profile/>}/>
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer/>}/>
                <Route path={'/users'} render={() =>
                    <UserContainer/>}/>
                <Route path={'/setting'} render={() => <Setting/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
