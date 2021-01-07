import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import {Route} from "react-router-dom";
import Setting from "./Component/Setting/Setting";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import {DialogsContainer} from "./Component/Dialogs/DialogsContainer";
import UserContainer from "./Component/User/UserContainer";
import ProfileContainer from "./Component/Profile/profileConteiner";
import HeaderContainer from "./Component/Header/HeaderContainer";


function App() {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <HeaderContainer/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={() =>
                    <ProfileContainer/>}/>
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
