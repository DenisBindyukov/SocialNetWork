import React from "react";
import style from './Posts.module.css';

type PostType = {
    id: number
    message: string
    picture: string
    like: string
    dislike: string
    peopleLike: number
}

const Post: React.FC<PostType> = (props) => {

    return (
        <div className={style.item}>
            <img
                src={props.picture}
                alt="Avatar woman picture"/>
            {props.message}
            <div>
                <span className={style.item_like}> <img src={props.like} alt="Picture like"/>{props.peopleLike}</span>
                <span className={style.item_like}> <img src={props.dislike} alt=""/>0</span>
            </div>
        </div>
    );
}

export default Post;