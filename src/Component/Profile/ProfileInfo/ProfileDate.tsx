import React from "react";
import workTrue from "../../../image/images true work.jpg";
import workFalse from "../../../image/unnamed false work.jpg";
import style from "./ProfileInfo.module.css";
import {ProfileType} from "../../../api/api";

type ProfileDateType = {
    profile: ProfileType
}


export const ProfileDate: React.FC<ProfileDateType> = (props) => {
    return(
        <div>
            <span className={style.styleName}> Full Name: {props.profile.fullName}</span>
            <h2>About Me: {props.profile.aboutMe}</h2>
            <img src={props.profile.lookingForAJob ? workTrue : workFalse}
                 className={style.photo_for_jod}/>
            <h3> Description of the desired position: {props.profile.lookingForAJobDescription}</h3>
            <p>Contacts to contact me ->
                <li><a href={props.profile.contacts.facebook}>Facebook</a></li>
                <li><a href={props.profile.contacts.instagram}>Instagram</a></li>
                <li><a href={props.profile.contacts.twitter}>Twitter</a></li>
                <li><a href={props.profile.contacts.vk}>Vk</a></li>
                <li><a href={props.profile.contacts.github}>Git Hub</a></li>
            </p>
        </div>
    );
}