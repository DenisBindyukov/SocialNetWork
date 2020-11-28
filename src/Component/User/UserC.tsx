import React from 'react';
import {UserType} from "../../Redux/users-reducer";
import style from './User.module.css'
import axios from 'axios'
import userPhoto from '../../image/man-avatar-profile-vector-21372076.jpg'


type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (num: number) => void
    changeValuePage: (value: number) => void
}


export class UserC extends React.Component<UsersType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeValuePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render = () => {

        const pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
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
                                className={` ${this.props.currentPage === p && style.page_fatty} ${style.pages_span}`}
                                onClick={ () => this.onPageChanged(p) }>{p}</span>
                        })
                    }
                </div>

                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} className={style.photo}/>
                </div>
                    <div>
                        {u.followed
                            ? <button className={style.user_button}
                                      onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button className={style.user_button}
                                      onClick={() => this.props.follow(u.id)}>Follow</button>}
                    </div>
                        </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            {/*<span>*/}
                            {/*    <div>{'u.location.country'}</div>*/}
                            {/*    <div>{'u.location.city'}</div>*/}
                            {/*</span>*/}
                    </span>

                    </div>)
                }
            </div>
        );
    }
}