import {Dispatch} from "redux";
import {userRequest} from "../api/api";

const ADD_POST = 'ADD-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const SET_USER_PROFILE =  'SET_USER_PROFILE';

type ActionsTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof setProfile>


const man = 'https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png';
const woman = 'https://image.shutterstock.com/image-vector/avatar-business-woman-wearing-colorful-600w-445305412.jpg';


 type postDateType = {
    id: number
    message: string
    picture: string
    like: string
    dislike: string
    peopleLike: number
}

export type ProfileType = {
    aboutMe: string
    contacts: ConcatType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: photosType
    userId: number

}
type ConcatType = {
    facebook: string,
    website: any,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: any,
    github: string,
    mainLink: any
}
type photosType = {
    small: string
    large: string
}
type profilePageType = {
    messageForNewPost: string
    postDate: Array<postDateType>
    profile: ProfileType | null

}

const initialState: profilePageType = {
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
    ],
    profile: null
};


export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {

    let stateCopy = {...state};
    switch (action.type) {

        case ADD_POST : {
            let userPost = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                picture: state.messageForNewPost.length > 8 ? woman : man,
                like: 'https://www.meme-arsenal.com/memes/bffe79abf100ea1f114f4c916c7f874d.jpg',
                dislike: 'https://gazeta.a42.ru/uploads/15f/15f17c40-0e1a-11e8-a4af-57fa39c27bbc.jpg',
                peopleLike: 0
            };

            if (state.messageForNewPost) {
                stateCopy.postDate = [...state.postDate];
                stateCopy.postDate.push(userPost);
                stateCopy.messageForNewPost = '';
            }
            return stateCopy;
        }

        case ADD_NEW_MESSAGE : {
            return {
                ...state,
                messageForNewPost: action.value
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const addNewMessageActionCreator = (value: string) => ({type: ADD_NEW_MESSAGE, value} as const);
export const setProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const);

export const getUsers = (userId: string) => (dispatch: Dispatch) => {

    userRequest.getUsers(userId)
        .then(response => {
            dispatch(setProfile(response));
        });
}