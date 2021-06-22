import React from "react";
import style from './Profile.module.scss';
import MyPosts from "./my-posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return(
        <div className={style.profileInner}>
            <div className={style.bgImage}></div>

            <ProfileInfo/>

            <MyPosts
                postData={props.state.postData}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />

        </div>
    )
}

export default Profile;