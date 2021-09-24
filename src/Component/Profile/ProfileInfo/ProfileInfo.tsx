import React, {useCallback, useMemo, useState} from "react";
import style from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preload";
import userPhoto from '../../../image/man-avatar-profile-vector-21372076.jpg';
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../api/api";
import {ProfileDate} from "./ProfileDate";
import {ProfileFormik} from "./ProfileForm";
import Button from '@material-ui/core/Button';


type ProfileInfoType = {
    preloader: boolean
    status: string
    profile: ProfileType | null
    upDateUserStatus: (status: string) => void
}


const ProfileInfo: React.FC<ProfileInfoType> = React.memo((props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}
                     className={style.photo}/>
                <div>
                    <Button variant="contained" color="primary" onClick={() => {
                        setEditMode(state => !state)
                    }}>
                        Change
                    </Button>
                </div>
                <ProfileStatus preloader={props.preloader} status={props.status}
                               upDateUserStatus={props.upDateUserStatus}/>
                {editMode ? <ProfileFormik/> : <ProfileDate profile={props.profile}/>}
            </div>
        </div>
    );
})


export default ProfileInfo;