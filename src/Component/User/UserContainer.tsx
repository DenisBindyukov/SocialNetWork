import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAc, unfollowAC, UserReducerType, UserType} from "../../Redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAc(users));
        }
    }
}


export const UserContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
