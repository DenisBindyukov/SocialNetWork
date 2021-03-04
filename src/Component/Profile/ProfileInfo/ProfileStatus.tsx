import React, {ChangeEvent, useEffect, useState} from "react";
import {Preloader} from "../../common/Preloader/Preload";

type ProfileStatusType = {
    preloader: boolean
    status: string
    upDateUserStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(true);
    const [statusValue, setStatusValue] = useState<string>(props.status);
    const changEditMode = () => setEditMode(!editMode);

    const changeStatus = () => {
        props.upDateUserStatus(statusValue);
        setEditMode(!editMode);
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setStatusValue(e.currentTarget.value);

   // useEffect(() => {
   //     setStatusValue(props.status)
   // }, [props.status]);

    if (props.preloader) {
        return <Preloader/>
    }
    return (
        <div>
            {editMode && <div>
                <span onDoubleClick={changEditMode}>{props.status}</span>
            </div>}
            {!editMode && <div>
                <input onBlur={changeStatus} onChange={onChangeHandler} autoFocus type="text"
                       value={statusValue}/>
            </div>}
        </div>
    );
}
