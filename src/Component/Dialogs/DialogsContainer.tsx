import React from "react";
import Dialog from "./Dialogs";
import {addNewMessageForDialogActionCreator, addPostForDialogsActionCreator} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {dialogsPageType} from "../../Redux/State";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapDispatchToProps = {
    addMessage: () => void
    addText: (text: string) => void
}

type mapStateToProps = {
    dialogsPage: dialogsPageType
}

let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addMessage: () => {
            dispatch(addPostForDialogsActionCreator());
        },
        addText: (text: string) => {
            dispatch(addNewMessageForDialogActionCreator(text));
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialog);

// let AuthRedirectComponent = withAuthRedirect(Dialog)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);