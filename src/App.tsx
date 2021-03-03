import React, {useEffect} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Setting from "./Component/Setting/Setting";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import UserContainer from "./Component/User/UserContainer";
import ProfileContainer from "./Component/Profile/profileConteiner";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Navbar from "./Component/Navbar.tsx/Navbar";
import {Login} from "./Component/Login/Login";
import {ErrorSnackbar} from "./Component/ErrorSnackbar/ErrorSnackbar";
import {auth} from "./Redux/auth-reducer";
import {useDispatch} from "react-redux";


function App() {

     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [])

    return (
        <div className={'app-wrapper'}>
            <ErrorSnackbar/>
            <HeaderContainer/>
            <Navbar/>
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
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
