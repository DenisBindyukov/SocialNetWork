import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUser, getUserStatus, setProfile, upDateUserStatus} from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../api/api";


type OwnProps = {


}
type PatchParamsType = {
    userId: string
}
type OwnPropsType =  MapDispatchType & MapStateType
type PropsType = RouteComponentProps<PatchParamsType> & OwnPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) userId ='12551 ';
        this.props.getUser(+userId);
        this.props.getUserStatus(+userId);
    }

    render() {
        return (
                <Profile {...this.props} status={this.props.status} profile={this.props.profilePage}/>
        );
    }
}


export type MapStateType = {
    preloader: boolean
    status: string
    profilePage: ProfileType | null
}

type MapDispatchType = {
    setProfile: (obj: ProfileType) => void
    getUser: (userId: number) => void
    getUserStatus: (userId: number) => void
    upDateUserStatus: (status: string) => void

}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        preloader: state.profilePage.preloader,
        status: state.profilePage.status,
        profilePage: state.profilePage.profile
    }
}

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {
        setProfile, getUser,getUserStatus,upDateUserStatus
    }),
    withRouter,
withAuthRedirect
)(ProfileContainer);


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// // let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// // //
// // // export default  connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {setProfile, getUsers})
// // // (WithUrlDataContainerComponent);