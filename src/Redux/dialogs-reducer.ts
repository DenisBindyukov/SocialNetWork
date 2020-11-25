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


export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes): dialogsPageType => {

    switch (action.type) {

        case ADD_POST_HANDLER : {
            let newMessage = {
                id: new Date().getTime(), message: state.messageForNewPostMessage,
            };
            let newDialog = {
                id: new Date().getTime(), name: 'Denis'
            };

            const copeState = {...state};

            if (state.messageForNewPostMessage) {
                copeState.messages = [...state.messages];
                copeState.messages.push(newMessage);
                copeState.dialogs = [...state.dialogs];
                copeState.dialogs.push(newDialog);
                copeState.messageForNewPostMessage = '';
            }
            return copeState;
        }

        case ADD_NEW_MESSAGE_FOR_MESSAGE :
            return {
                ...state,
                messageForNewPostMessage: action.message
            };

        default :
            return state;
    }
}

export const addPostForDialogsActionCreator = () => ({type: ADD_POST_HANDLER} as const);
export const addNewMessageForDialogActionCreator = (value: string) =>
    ({type: ADD_NEW_MESSAGE_FOR_MESSAGE, message: value} as const);

