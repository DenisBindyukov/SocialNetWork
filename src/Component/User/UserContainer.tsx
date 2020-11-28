import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    changeValuePagesAC,
    followAC, setTotalCountAC,
    setUsersAc,
    unfollowAC,
    UserType
} from "../../Redux/users-reducer";
import {UserC} from "./UserC";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.user,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setTotalCount: (num: number) => {
            dispatch(setTotalCountAC(num));
        },
        changeValuePage: (value: number) => {
            dispatch(changeValuePagesAC(value));
        }
    }
}


export const UserContainer = connect(mapStateToProps,mapDispatchToProps)(UserC);

