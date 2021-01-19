import React, {useState} from "react";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(true);
    const changEditMode = () => setEditMode(!editMode);

    return (
        <div>
            {editMode && <div>
                <span onDoubleClick={changEditMode}>{props.status}</span>
            </div>}
            {!editMode && <div>
                <input onBlur={changEditMode} autoFocus type="text" value={props.status}/>
            </div>}
        </div>
    );
}
