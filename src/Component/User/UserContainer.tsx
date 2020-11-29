import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    changeValuePage,
    follow, setTotalCount,
    setUsers, toggleFetching,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "./Preloader/Preload";


type OwnProps = {

}
type PropsType = OwnProps & MapStateType & MapDispatchType

class UserContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleFetching(true);
        this.props.changeValuePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
            })
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
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.user,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
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
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (num: number) => void
    changeValuePage: (value: number) => void
    toggleFetching: (isFetching: boolean) => void
}


export default connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {
    changeValuePage,
    follow,
    setTotalCount,
    setUsers,
    toggleFetching,
    unfollow,
})(UserContainer);

