import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: string
    upDateUserStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(true);
    const [statusValue, setStatusValue] = useState<string>(props.status);
    const changEditMode = () => setEditMode(!editMode);

    const changeStatus = () => {
        if(statusValue) {
            props.upDateUserStatus(statusValue);
        }
        setEditMode(!editMode);
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setStatusValue(e.currentTarget.value);

    return (
        <div>
            {editMode && <div>
                <span onDoubleClick={changEditMode}>{props.status}</span>
            </div>}
            {!editMode && <div>
                <input onBlur={changeStatus} onChange={onChangeHandler} autoFocus type="text" value={statusValue}/>
            </div>}
        </div>
    );
}
