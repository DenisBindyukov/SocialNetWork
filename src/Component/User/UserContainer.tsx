import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    changeValuePage,
    requestUsers,
    toggleFollowingProgress,
     unfollow, follow
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preload";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserType} from "../../api/api";
import {
    getAuth,
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getTotalCount,
    getUsers,
    getUsersPageSize
} from "../../Redux/user-selector";


type OwnProps = {

}
type PropsType = OwnProps & MapStateType & MapDispatchType

class UserContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeValuePage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render = () => {

        return (
        <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   />
        </>
        );
    }
}


// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAc(users));
//         },
//         setTotalCount: (num: number) => {
//             dispatch(setTotalCountAC(num));
//         },
//         changeValuePage: (value: number) => {
//             dispatch(changeValuePagesAC(value));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleFetchingAC(isFetching));
//     }
//     }
// }

type MapStateType = {
    users: Array<UserType>
    isAuth: boolean
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    changeValuePage: (value: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: getAuth(state),
        users:getUsers(state),
        pageSize: getUsersPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps,
        {
        changeValuePage,
        follow,
        unfollow,
        toggleFollowingProgress,
            requestUsers
        }),
    withAuthRedirect
)
(UserContainer);

