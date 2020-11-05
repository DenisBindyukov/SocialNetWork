import React from "react";
import style from './ProfileInfo.module.css';


type ProfileInfoType = {}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://freerangestock.com/sample/40062/person-connecting-and-sharing-using-social-media-networks.jpg" alt={'pict'}/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;