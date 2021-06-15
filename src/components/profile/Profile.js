import React from "react";
import style from './Profile.module.scss';
import MyPosts from "./my-posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../dialogs/DialogItem/DialogItem";
import MessageItem from "../dialogs/MessageItem/MessageItem";

const Profile = (props) => {

    return(
        <div className={style.profileInner}>
            <div className={style.bgImage}></div>

            <ProfileInfo/>

            <MyPosts postData={props.postData}/>

        </div>
    )
}

export default Profile;