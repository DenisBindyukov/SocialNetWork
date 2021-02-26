import React from "react";
import style from './MyPosts.module.css'
import Post from "./Posts/Posts";
import {Redirect} from "react-router";
import {profilePageType} from "../../../Redux/profile-reducer";
import {MultilineTextFields} from "../../common/MultilineTextFields";


type MyPostType = {
    posts: profilePageType
    addPost: (newMessageBody: string) => void
    isAuth: boolean
}

const MyPost: React.FC<MyPostType> = (props) => {

    const postElement = props.posts.postDate.map(el => <Post id={el.id} message={el.message}
                                                             picture={el.picture} like={el.like}
                                                             dislike={el.dislike}
                                                             peopleLike={el.peopleLike}
                                                             key={el.id}/>)

    if (!props.isAuth) return <Redirect to={`/login`}/>

    return (
        <div>
            <div className={style.postBlock}>
                <h3>My post</h3>
                    <MultilineTextFields sendNewPost={props.addPost}/>
                <div className={style.post}>
                    {postElement}
                </div>
            </div>
        </div>
    );
}


export default MyPost;