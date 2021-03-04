import React from "react";
import style from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preload";
import userPhoto from '../../../image/man-avatar-profile-vector-21372076.jpg';
import workTrue from '../../../image/images true work.jpg';
import workFalse from '../../../image/unnamed false work.jpg';
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../api/api";


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
                <span className={style.styleName}> Full Name: {props.profile.fullName}</span>
                <div>
                    <div>
                        <h2>About Me: {props.profile.aboutMe}</h2>
                        <img src={props.profile.lookingForAJob ? workTrue : workFalse}
                             className={style.photo_for_jod}/>
                        <h3>Description of the desired position: {props.profile.lookingForAJobDescription}</h3>
                        <p>Contacts to contact me ->
                            <li><a href={props.profile.contacts.facebook}>Facebook</a></li>
                            <li><a href={props.profile.contacts.instagram}>Instagram</a></li>
                            <li><a href={props.profile.contacts.twitter}>Twitter</a></li>
                            <li><a href={props.profile.contacts.vk}>Vk</a></li>
                            <li><a href={props.profile.contacts.github}>Git Hub</a></li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default ProfileInfo;