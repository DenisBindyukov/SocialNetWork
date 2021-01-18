import React from 'react';
import {Redirect} from "react-router";

type withAuthRedirectType = typeof Function

export const withAuthRedirect: React.FC<any> = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>

            return  <Component {...this.props}/>
        }
    }
}