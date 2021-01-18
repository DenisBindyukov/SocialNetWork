import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUsers, ProfileType, setProfile} from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
                <Profile {...this.props} profile={this.props.profilePage}/>
        );
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// let AuthRedirectComponent = (props: PropsType) => {
//     if (!props.isAuth) return <Redirect to={'/login'}/>
// return <ProfileContainer {...props} />
// }


export type MapStateType = {
    profilePage: ProfileType | null
}

type MapDispatchType = {
    setProfile: (obj: ProfileType) => void
    getUsers: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profilePage: state.profilePage.profile
    }
}


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default  connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {setProfile, getUsers})
(WithUrlDataContainerComponent);