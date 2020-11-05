import {ActionsTypes, dialogsPageType,} from "./State";

const ADD_POST_HANDLER = 'ADD-POST-HANDLER';
const ADD_NEW_MESSAGE_FOR_MESSAGE = 'ADD-NEW-MESSAGE-FOR-MESSAGE';

const initialState = {
    messageForNewPostMessage: '',
    dialogs: [
        {id: 1, name: 'Denis'},
        {id: 2, name: 'Nikolay'},
        {id: 3, name: 'Petyx'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Julia'},
        {id: 6, name: 'Sasha'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are you doing today?'},
        {id: 3, message: `I'll run`},
        {id: 4, message: 'How many kilometers'},
        {id: 5, message: 'Wow, cool'},
        {id: 6, message: 'Are you crazy ?'}
        ]
};


export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {

        case ADD_POST_HANDLER :
            let newMessage = {
                id: 7, message: state.messageForNewPostMessage,
            };
            let newDialog = {
                id: 8, name: 'Denis'
            };
            if (state.messageForNewPostMessage) {
                state.messages.push(newMessage);
                state.dialogs.push(newDialog);
                state.messageForNewPostMessage = '';
            }
            return state;

        case ADD_NEW_MESSAGE_FOR_MESSAGE :
            state.messageForNewPostMessage = action.message;
            return state;

        default :
            return state;
    }
}

export const addPostForDialogsActionCreator = () => ({type: ADD_POST_HANDLER} as const);
export const addNewMessageForDialogActionCreator = (value: string) =>
    ({type: ADD_NEW_MESSAGE_FOR_MESSAGE, message: value} as const);

