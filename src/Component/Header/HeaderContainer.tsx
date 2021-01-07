import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {logOffAuthAC, setAuthUserDate} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Header} from "./Header";
import {Dispatch} from "redux";

type OwnProps = {


}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.authUserDate(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStateType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchType = {
    authUserDate: (userId: number, email: string, login: string) => void
    logOff: (value: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {

        authUserDate: (userId: number, email: string, login: string) => {
            dispatch(setAuthUserDate(userId, email, login));
        },

        logOff: (value: boolean) => {
            dispatch(logOffAuthAC(value));
        }
    }
}

export default connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)
(HeaderContainer);