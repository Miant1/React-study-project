import React from "react";
import style from './MyPosts.module.scss';
import Post from "./post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {

    let posts = props.postData.map(p => <Post message={p.message} likes={p.likes}/>);

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onTextChange = () => {
        let elem = newPostElement.current.value;
        props.dispatch( updatePostTextActionCreator(elem) );
    }


    return(
        <div className={style.posts}>
            <h3 className={style.title}>My posts</h3>
            <div className={style.newPost}>
                <textarea
                    ref={newPostElement}
                    placeholder='Your thoughts'
                    value={props.newPostText}
                    onChange={onTextChange}/>
                <button className={style.send} onClick={ addPost }>Send</button>
            </div>
            <div className={style.publicPosts}>
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;