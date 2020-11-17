
import {ActionsTypes, profilePageType} from "./State";

const ADD_POST = 'ADD-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


const man = 'https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png';
const woman = 'https://image.shutterstock.com/image-vector/avatar-business-woman-wearing-colorful-600w-445305412.jpg';

const initialState = {
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
};


export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {

    switch (action.type) {
        case ADD_POST :
            let userPost = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                picture: state.messageForNewPost.length > 8 ? woman : man,
                like: 'https://www.meme-arsenal.com/memes/bffe79abf100ea1f114f4c916c7f874d.jpg',
                dislike: 'https://gazeta.a42.ru/uploads/15f/15f17c40-0e1a-11e8-a4af-57fa39c27bbc.jpg',
                peopleLike: 0
            };
            if (state.messageForNewPost) {
                state.postDate.push(userPost);
                state.messageForNewPost = '';
            }
            return state;

        case ADD_NEW_MESSAGE :
            state.messageForNewPost = action.message;
            return state
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const addNewMessageActionCreator = (value: string) => ({type: ADD_NEW_MESSAGE, message: value}  as const);
