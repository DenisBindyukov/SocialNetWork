const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const photoUserOne = 'https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png';
export const photoUserTwo = 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg';
export const photoUserThree = 'https://blizko.by/ckeditor_assets/pictures/59377/content_1.jpg';
export const photoUserFour = 'https://s.ura.news/760/images/news/upload/news/454/655/1052454655/555954_Aleksandr_Lukashenko_lukashenko_aleksandr_250x0_3065.2176.0.0.jpg';

type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAc>


type PhotosType = {
    small: any,
    large: any
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: any,
    photos: PhotosType
    status: any,
    followed: boolean
}

export type UserReducerType = {
    user: Array<UserType>
}

const initialState = {
    user: []
};

export const UserReducer = (state: UserReducerType = initialState, action: ActionType) => {

    switch (action.type) {

        case FOLLOW :
            return {
                ...state,
                followed: state.user.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                followed: state.user.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                user: [...state.user, ...action.users]
            }

        default :
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAc = (users: Array<UserType>) => ({type: SET_USERS, users} as const);

