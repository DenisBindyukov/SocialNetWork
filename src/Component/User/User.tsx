import React from 'react';
import style from './User.module.css'
import userPhoto from '../../image/man-avatar-profile-vector-21372076.jpg'
import {NavLink} from "react-router-dom";
import {UserType} from "../../api/api";


type UserComponentType = {
    user: UserType
    followingInProgress: number[]
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<UserComponentType> = React.memo(({user, followingInProgress, follow, unfollow}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.large != null ? user.photos.large : userPhoto} className={style.photo}/>
                    </NavLink>
                </div>
                    <div>
                        {user.followed
                            ? <button className={style.user_button}
                                      disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => unfollow(user.id)}>Unfollow</button>
                            : <button className={style.user_button}
                                      disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => follow(user.id)}>Follow</button>}
                    </div>
                        </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>

        </div>)
});
