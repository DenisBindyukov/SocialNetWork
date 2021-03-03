import React from "react";
import {connect} from "react-redux";
import {auth, logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Header} from "./Header";


type OwnProps = {}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = OwnPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props} />
    }
}

type MapStateType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchType = {
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         auth: () => {
//
//         },
//         logOff: (value: boolean) => {
//             dispatch(logOffAuthAC(value));
//         }
//     }
// }

export default connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps,{logout})
(HeaderContainer);