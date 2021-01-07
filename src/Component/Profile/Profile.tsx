import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePageType = {
    profile: any
}

const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <hr/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;