import {ActionsTypes, dialogsPageType,} from "./State";

const ADD_POST_HANDLER = 'dialogs/ADD-POST-HANDLER';

const initialState = {
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
                id: new Date().getTime(), message: action.newMessageBody,
            };
            let newDialog = {
                id: new Date().getTime(), name: 'Denis'
            };
               return  {
                    ...state,
                    messages: [...state.messages,{...newMessage}],
                   dialogs: [...state.dialogs,{...newDialog}]
                }
            return state;
        }
        default :
            return state;
    }
}

export const addPostForDialogsActionCreator = (newMessageBody: string) => ({type: ADD_POST_HANDLER, newMessageBody} as const);

