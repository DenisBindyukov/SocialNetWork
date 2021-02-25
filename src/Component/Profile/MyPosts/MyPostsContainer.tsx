import React from "react";
import {addPostActionCreator, profilePageType} from "../../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type mapDispatchToProps = {
    addPost: (newMessageBody: string) => void

}

type mapStateToProps = {
    posts: profilePageType
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        posts: state.profilePage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps  => {
    return {
        addPost: (newMessageBody: string) => {
           dispatch(addPostActionCreator(newMessageBody));
        }
    }
}


 const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export  default MyPostsContainer;