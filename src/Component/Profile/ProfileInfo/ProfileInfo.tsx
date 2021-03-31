import React from "react";
import style from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preload";
import userPhoto from '../../../image/man-avatar-profile-vector-21372076.jpg';
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../api/api";
import {ProfileDate} from "./ProfileDate";


type ProfileInfoType = {
    preloader: boolean
    status: string
    profile: ProfileType | null
    upDateUserStatus: (status: string) => void
}


const ProfileInfo: React.FC<ProfileInfoType> = React.memo((props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
                     className={style.photo}/>
                <ProfileStatus preloader={props.preloader} status={props.status}
                               upDateUserStatus={props.upDateUserStatus}/>
                <ProfileDate profile={props.profile}/>
            </div>
        </div>
    );
})


export default ProfileInfo;