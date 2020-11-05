import React from "react";
import {addNewMessageActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";

type MyPostsCounterType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsCounterType> = (props) => {

    const state = props.store.getState();

    const onNewTextHandler = (text: string) => {
        props.store.dispatch(addNewMessageActionCreator(text));
    }

    const onAddTaskHandler = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <MyPost posts={state.profilePage} onPostChange={onNewTextHandler} addPost={onAddTaskHandler}/>
    );
}
