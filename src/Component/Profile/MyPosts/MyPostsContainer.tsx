import {addPostActionCreator, deletePost, profilePageType} from "../../../Redux/profile-reducer";
import MyPost from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type mapDispatchToProps = {
    addPost: (newMessageBody: string) => void
    deletePost: (id: number) => void
}

type mapStateToProps = {
    posts: profilePageType
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        posts: state.profilePage,
        isAuth: state.auth.isAuth,
    }
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps  => {
    return {
        addPost: (newMessageBody: string) => {
           dispatch(addPostActionCreator(newMessageBody));
        },
        deletePost: (id: number) => {
            dispatch(deletePost(id));
        }
    }
}


 const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export  default MyPostsContainer;