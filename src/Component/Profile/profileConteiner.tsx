import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUsers, ProfileType, setProfile} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";


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
        if(!userId) userId ='2';
        this.props.getUsers(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profilePage}/>
            </div>
        );
    }
}


export type MapStateType = {
    profilePage: ProfileType | null,
    isAuth: boolean
}

type MapDispatchType = {
    setProfile: (obj: ProfileType) => void
    getUsers: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profilePage: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default  connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {setProfile, getUsers})
(WithUrlDataContainerComponent);