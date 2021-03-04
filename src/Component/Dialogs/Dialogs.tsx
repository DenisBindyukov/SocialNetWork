import React from "react";
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../Redux/State";
import {MultilineTextFields} from "../common/MultilineTextFields";

type DialogsType = {
    dialogsPage: dialogsPageType
    addMessage: (newMessageBody: string) => void
}


const Dialog: React.FC<DialogsType> = React.memo((props) => {

    const users = props.dialogsPage.dialogs.map((el, index) => <DialogItem id={el.id} name={el.name} key={index}/>);
    const postElement = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    users
                }
            </div>
            <div className={style.messages}>
                {
                    postElement
                }
                <div className={style.block_control}>
                    <MultilineTextFields sendNewPost={props.addMessage}/>
                </div>
            </div>
        </div>
    );
})




export default Dialog;