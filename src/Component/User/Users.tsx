import React from 'react';
import {UserType} from "../../Redux/users-reducer";
import style from './User.module.css'
import userPhoto from '../../image/man-avatar-profile-vector-21372076.jpg'

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (value: number) => void
    follow: (num: number) => void
    unfollow: (num: number) => void
}

export const Users: React.FC<UsersType> = (props) => {

    const pageCount = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    return (
        <div>

            <div className={style.pages}>
                {
                    pages.map(p => {

                        return <span
                            className={` ${props.currentPage === p && style.page_fatty} ${style.pages_span}`}
                            onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} className={style.photo}/>
                </div>
                    <div>
                        {u.followed
                            ? <button className={style.user_button}
                                      onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button className={style.user_button}
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
}