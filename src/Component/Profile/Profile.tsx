import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";


type ProfilePageType = {
    profile: ProfileType | null
}

const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div>
            <ProfileInfo {...props} profile={props.profile}/>
            <hr/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;