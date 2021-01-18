import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../Redux/State";
import {Redirect} from "react-router";

type DialogsType = {
    dialogsPage: dialogsPageType
    addMessage: () => void
    addText: (text: string) => void
}


const Dialog: React.FC<DialogsType> = (props) => {

    const users = props.dialogsPage.dialogs.map(el => <DialogItem id={el.id} name={el.name}/>);
    const postElement = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id}/>);

    const addMessageHandler = () => {
        props.addMessage();
    };
    const addTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addText(e.currentTarget.value);
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key == 'Enter') {
            addMessageHandler();
            event.preventDefault();
        }
    }

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
                    <textarea value={props.dialogsPage.messageForNewPostMessage} className={style.superInput}
                              onChange={addTextHandler} onKeyPress={onKeyPressHandler}/>
                    <div>
                        <button className={style.myButton} onClick={addMessageHandler}>Add message</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dialog;