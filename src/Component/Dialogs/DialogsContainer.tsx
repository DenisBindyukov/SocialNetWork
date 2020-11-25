import React from "react";
import Dialog from "./Dialogs";
import {addNewMessageForDialogActionCreator, addPostForDialogsActionCreator} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addPostForDialogsActionCreator());
        },
        addText: (text: string) => {
            dispatch(addNewMessageForDialogActionCreator(text));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);