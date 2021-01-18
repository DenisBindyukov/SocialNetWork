import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";


type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<mapStateToPropsForRedirectType> = (props) =>{
    let {isAuth, ...restProps} = props;

        if (!isAuth) return <Redirect to='/login'/>

        return <WrappedComponent {...restProps as WCP}/>

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}