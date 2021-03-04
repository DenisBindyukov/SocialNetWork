import React from "react";
import style from './Posts.module.css';

type PostType = {
    id: number
    message: string
    picture: string
    like: string
    dislike: string
    peopleLike: number
    deletePost: (id: number) => void
}

const Post: React.FC<PostType> = (props) => {

    const deletePost = () => {
        props.deletePost(props.id)
    }

    return (
        <div className={style.item}>
            <div>
                <img
                    src={props.picture}
                    alt="Avatar woman picture"/>
            </div>
            {props.message}
            <div>
                <button onClick={deletePost}>Delete</button>
            </div>

            <div>
                <span className={style.item_like}> <img src={props.like} alt="Picture like"/>{props.peopleLike}</span>
                <span className={style.item_like}> <img src={props.dislike} alt=""/>0</span>
            </div>
        </div>
    );
}

export default Post;