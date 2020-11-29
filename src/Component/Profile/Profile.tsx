import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profile: any
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <hr/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;