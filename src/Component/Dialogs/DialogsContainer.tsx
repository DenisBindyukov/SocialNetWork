import React, {ChangeEvent, KeyboardEvent} from "react";
import Dialog from "./Dialogs";
import {addNewMessageForDialogActionCreator, addPostForDialogsActionCreator} from "../../Redux/dialogs-reducer";
import {StoreType} from "../../Redux/redux-store";

type DialogsContainerType = {
    store: StoreType
}

 export const DialogsContainer:React.FC<DialogsContainerType> = (props) => {
       const store = props.store.getState();
     const onAddMessageHandler = () => {
         props.store.dispatch(addPostForDialogsActionCreator());
     };
     const onAddTextHandler = (text: string) => {
         props.store.dispatch(addNewMessageForDialogActionCreator(text));
     }

    return (
        <Dialog dialogsPage={store.dialogsPage} addMessage={onAddMessageHandler} addText={onAddTextHandler}/>
    );
}