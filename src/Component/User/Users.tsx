import React from 'react';
import style from './User.module.css'
import {UserType} from "../../api/api";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (value: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export const Users: React.FC<UsersType> = React.memo((props) => {

    return (
        <div>
            <div className={style.pages}>
                <Paginator
                    currentPage={props.currentPage}
                    totalItemsCount={props.totalCount}
                    pageSize={props.pageSize}
                    onPageChanged={props.onPageChanged}/>
            </div>
            {
                props.users.map(u => <User
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followingInProgress={props.followingInProgress}
                    toggleFollowingProgress={props.toggleFollowingProgress}
                    key={u.id}
                    user={u}/>
                    )
            }
        </div>
    );
})