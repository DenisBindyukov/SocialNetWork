import React from "react";
import {addNewMessageActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPostChange: (text: string) => {
            dispatch(addNewMessageActionCreator(text));
        },
        addPost: () => {
           dispatch(addPostActionCreator());
        }
    }
}


 const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export  default MyPostsContainer;