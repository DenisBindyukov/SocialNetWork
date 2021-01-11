import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': `99a54c84-bd3d-4d91-9acb-a0d80b2c0df0`}
})

export const apiRequest = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}


export const authRequest = {
    auth() {
        return instance.get(`auth/me`)
    }
}

export const userRequest = {

    getUsers(userId: string) {
        return instance.get(`profile/${userId}`)
              .then(response => response.data)
    }
}

