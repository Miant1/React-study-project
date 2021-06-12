import React from "react";
import style from './MyPosts.module.scss';
import Post from "./post/Post";

const MyPosts = () => {
    return(
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <div className={style.newPost}>
                <input type="text" placeholder='Your thoughts'/>
                <button className={style.send}>Send</button>
            </div>
            <div className={style.publicPosts}>
                <Post message='Hello, how are you' likes='15'/>
                <Post message='My first post' likes='20'/>
            </div>
        </div>
    )
}

export default MyPosts;