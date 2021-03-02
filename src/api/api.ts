import axios from "axios";

type photosType = {
    small: string
    large: string
}
type ConcatType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
}
export type ProfileType = {
    aboutMe?: string | null
    contacts: ConcatType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: photosType
    userId: number
}
type UserFollowAndUpdateStatus<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}
type PhotosType = {
    small: null | string
    large: null | string
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName?: any
    photos: PhotosType
    status: null | string
    followed: boolean
}
type UsersType = {
    error: null | string
    items: Array<UserType>
    totalCount: number
}


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': `a766318c-db12-4aae-b8b8-9ea1f33a00d7`}
});


export const authRequest = {
    auth() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password,rememberMe });
    },
    logout() {
        return instance.delete('/auth/login');
    }
};

export const apiRequest = {

    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    },

    follow(id: number) {
        return instance.post<UserFollowAndUpdateStatus>(`follow/${id}`)
            .then(response => response.data);
    },

    unfollow(id: number) {
        return instance.delete<UserFollowAndUpdateStatus>(`follow/${id}`)
            .then(response => response.data);
    }
};

export const profileAPI = {

    getUser(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
              .then(response => response.data);
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateUserStatus(status: string) {
        return instance.put<UserFollowAndUpdateStatus>(`profile/status`, {status});
    }
};

