import React from 'react';
import {
    photoUserFour,
    photoUserOne,
    photoUserThree,
    photoUserTwo,
    UserReducerType, UserType
} from "../../Redux/users-reducer";
import style from './User.module.css'


type UsersType = {
    usersPage: UserReducerType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users: React.FC<UsersType> = (props) => {
    if (props.usersPage.user.length === 0) {
        props.setUsers([
            {
                id: 1, followed: true, photo: photoUserOne, fullName: 'Denis', status: 'Junior',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2, followed: false, photo: photoUserTwo, fullName: 'Marya', status: 'Midl',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 3, followed: false, photo: photoUserThree, fullName: 'Katya', status: 'Signor',
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: 4, followed: true, photo: photoUserFour, fullName: 'Dimych', status: 'Signor',
                location: {country: 'Germany', city: 'Berlin'}
            }
        ]);
    }

    return (
        <div>
            {
                props.usersPage.user.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photo} className={style.photo}/>
                </div>
                    <div>
                        {u.followed
                            ? <button className={style.user_button} onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button className={style.user_button} onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                        </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
}