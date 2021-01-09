import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { 'API-KEY': `99a54c84-bd3d-4d91-9acb-a0d80b2c0df0` }
})

export const apiRequest = {

    getUsers (currentPage: number, pageSize: number)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data)
    },

     follow  (id: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data)
    },

    unfollow (id: number) {
        return  instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data)
    }
}


