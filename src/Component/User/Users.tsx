import React from 'react';
import style from './User.module.css'
import userPhoto from '../../image/man-avatar-profile-vector-21372076.jpg'
import {NavLink} from "react-router-dom";
import {UserType} from "../../api/api";

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

    const pageCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    return (
        <div>

            <div className={style.pages}>
                {
                    pages.map((p, index) => {

                        return <span
                            key={index}
                            className={` ${props.currentPage === p && style.page_fatty} ${style.pages_span}`}
                            onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} className={style.photo}/>
                    </NavLink>
                </div>
                    <div>
                        {u.followed
                            ? <button className={style.user_button}
                                      disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button className={style.user_button}
                                      disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                        </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
})