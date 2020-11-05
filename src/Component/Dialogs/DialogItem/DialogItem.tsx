import React from "react";
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div>
            <div className={style.dialog}>
                <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;