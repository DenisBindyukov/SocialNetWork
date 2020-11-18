
import {addNewMessageForDialogActionCreator, addPostForDialogsActionCreator, dialogsReducer,} from "./dialogs-reducer";
import {addPostActionCreator, addNewMessageActionCreator, profileReducer} from './profile-reducer';
import {sidebarReducer} from "./sidebar-reducer";

export type messagesType = {
    id: number
    message: string
}
export type dialogsType = {
    id: number
    name: string
}
export type postDateType = {
    id: number
    message: string
    picture: string
    like: string
    dislike: string
    peopleLike: number
}
export type dialogsPageType = {
    messageForNewPostMessage: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type profilePageType = {
    messageForNewPost: string
    postDate: Array<postDateType>
}
export type sidebarType = {};
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
export type StoreType = {
    _state: RootStateType
    _OnChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void;
}


export type ActionsTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof addPostForDialogsActionCreator>
    | ReturnType <typeof addNewMessageForDialogActionCreator>



let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            postDate: [
                {
                    id: 1,
                    message: 'How are you ?',
                    picture: 'https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png',
                    like: 'https://www.meme-arsenal.com/memes/bffe79abf100ea1f114f4c916c7f874d.jpg',
                    dislike: 'https://gazeta.a42.ru/uploads/15f/15f17c40-0e1a-11e8-a4af-57fa39c27bbc.jpg',
                    peopleLike: 20,
                },
                {
                    id: 2,
                    message: `I'm fine, thank you!`,
                    picture: 'https://image.shutterstock.com/image-vector/avatar-business-woman-wearing-colorful-600w-445305412.jpg',
                    like: 'https://www.meme-arsenal.com/memes/bffe79abf100ea1f114f4c916c7f874d.jpg',
                    dislike: 'https://gazeta.a42.ru/uploads/15f/15f17c40-0e1a-11e8-a4af-57fa39c27bbc.jpg',
                    peopleLike: 13,
                },
                {
                    id: 3,
                    message: 'Nice!',
                    picture: 'https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png',
                    like: 'https://www.meme-arsenal.com/memes/bffe79abf100ea1f114f4c916c7f874d.jpg',
                    dislike: 'https://gazeta.a42.ru/uploads/15f/15f17c40-0e1a-11e8-a4af-57fa39c27bbc.jpg',
                    peopleLike: 246,
                },
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _OnChange() {
        // state changed
    },
    subscribe(observer: () => void) {
      //  this._OnChange = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {

        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);

        this._OnChange();

    }
};

export default store;


