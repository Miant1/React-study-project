import React from "react";
import style from './MyPosts.module.scss';
import Post from "./post/Post";

const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post message={p.message} likes={p.likes}/>)

    return(
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <div className={style.newPost}>
                <input type="text" placeholder='Your thoughts'/>
                <button className={style.send}>Send</button>
            </div>
            <div className={style.publicPosts}>
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;