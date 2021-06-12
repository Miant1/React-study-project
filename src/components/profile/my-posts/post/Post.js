import React from "react";
import style from './Post.module.scss';

const Post = (props) => {  // деструкторизация ({}) объекта (props) для вызова только одного атрибута
    return(
        <div className={style.item}>
            <div className={style.avatar}></div>
            <div>
                <p>{props.message}</p>
                <div>Likes: {props.likes}</div>
            </div>
        </div>
    )
}

export default Post;