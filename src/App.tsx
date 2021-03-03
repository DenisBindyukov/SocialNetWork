import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
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
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./Redux/redux-store";
import {initialize} from "./Redux/app-reducer";
import {Preloader} from "./Component/common/Preloader/Preload";


type AppPropsType = MapDispatchType & MapStateType
type OwnProps = {}

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

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
}

export type MapStateType = {
    initialized: boolean
}

type MapDispatchType = {
    initialize: () => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        initialized: state.app.initialized
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {initialize}))(App);
