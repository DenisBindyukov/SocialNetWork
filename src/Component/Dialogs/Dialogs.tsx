import React from "react";
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsPageType} from "../../Redux/State";
import {FormDataType, MessageReduxForm} from "./Message/MessageReduxForm";

type DialogsType = {
    dialogsPage: dialogsPageType
    addMessage: (newMessageBody: string) => void
}


const Dialog: React.FC<DialogsType> = (props) => {

    const users = props.dialogsPage.dialogs.map((el, index) => <DialogItem id={el.id} name={el.name} key={index}/>);
    const postElement = props.dialogsPage.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>);

    // const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (event.key == 'Enter') {
    //         addMessageHandler();
    //         event.preventDefault();
    //     }
    // }

    const onSubmit = (formData: FormDataType) => {
        props.addMessage(formData.message)
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
                    <MessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
}




export default Dialog;