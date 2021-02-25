import React from "react";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newMessageBody: string) => {
           dispatch(addPostActionCreator(newMessageBody));
        }
    }
}


 const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export  default MyPostsContainer;