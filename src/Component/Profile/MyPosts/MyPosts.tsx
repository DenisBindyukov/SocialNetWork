import React, {ChangeEvent, KeyboardEvent} from "react";
import style from './MyPosts.module.css'
import Post from "./Posts/Posts";
import {profilePageType} from "../../../Redux/State";
import {Redirect} from "react-router";
import {AddPostReduxForm, FormDataType} from "../AddPostFormRedux";


type MyPostType = {
    posts: profilePageType
    onPostChange: (text: string) => void
    addPost: () => void
    isAuth: boolean
}

const MyPost: React.FC<MyPostType> = (props) => {

    const postElement = props.posts.postDate.map(el => <Post id={el.id} message={el.message}
                                                             picture={el.picture} like={el.like}
                                                             dislike={el.dislike}
                                                             peopleLike={el.peopleLike}
                                                             key={el.id}/>)

    const addTaskHandler = () => {
        props.addPost();
    }
    const newTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value);
    }
    const keyPresHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler();
            e.preventDefault();
        }
    }
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    if (!props.isAuth) return <Redirect to={`/login`}/>

    return (
        <div>
            <div className={style.postBlock}>
                <h3>My post</h3>
                <div>
                    <AddPostReduxForm onSubmit={onSubmit}/>
                </div>
                <div className={style.post}>
                    {postElement}
                </div>
            </div>
        </div>
    );
}


export default MyPost;