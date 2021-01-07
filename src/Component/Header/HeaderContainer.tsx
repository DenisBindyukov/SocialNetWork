import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {authReducerType, setAuthUserDate} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

type OwnPropsType =  MapDispatchType & MapStateType
type PropsType = OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then(response => {
            if(response.data.resultCode === 0) {
             this.props
            }
        });
}

    render() {
    return <Header {...this.props} />
    }
}

 type MapStateType = {
     auth: authReducerType | null
}

type MapDispatchType = {
    setAuthUserDate: (obj: authReducerType) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        auth: state.auth
    }
}

    export default connect<any>(mapStateToProps, {setAuthUserDate})
    (HeaderContainer);