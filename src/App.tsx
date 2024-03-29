import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Setting from "./Component/Setting/Setting";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Navbar from "./Component/Navbar.tsx/Navbar";
import {Login} from "./Component/Login/Login";
import {ErrorSnackbar} from "./Component/ErrorSnackbar/ErrorSnackbar";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "./Redux/redux-store";
import {initialize} from "./Redux/app-reducer";
import {Preloader} from "./Component/common/Preloader/Preload";
import HeaderContainer from "./Component/Header/HeaderContainer";
import {setAppError} from "./Redux/auth-reducer";
import ProfileContainer from "./Component/Profile/profileConteiner";

// Suspense дополненая обёртка  к линивой загрузке.,
//
//
// le/profileConteiner'));
const DialogsContainer = React.lazy(() => import('./Component/Dialogs/DialogsContainer'));
const UserContainer = React.lazy(() => import('./Component/User/UserContainer'));


type AppPropsType = MapDispatchType & MapStateType
type OwnProps = {}

class App extends Component<AppPropsType> {

    componentDidMount() {
        this.props.initialize()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <ErrorSnackbar/>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route exact path={'/profile/:userId?'} render={() => {
                            // 'Ленивая загрузка' позволяющая загружать компоненты при нажатии на ссылку компоненты т.е через NavLink
                            return <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/dialogs'} render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/users'} render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <UserContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path={'/setting'} render={() => <Setting/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path='*' render={() => <div
                            style={{position: 'fixed', top: '30%', left: '40%', textAlign: 'center'}}>
                            <h1>404 NOT FOUND</h1></div>}/>
                    </Switch>
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
    setAppError: (error: null | string) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        initialized: state.app.initialized
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {initialize, setAppError}))(App);
