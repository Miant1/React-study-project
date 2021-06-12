import React from "react";
import style from './Profile.module.scss';
import MyPosts from "./my-posts/MyPosts";

const Profile = () => {
    return(
        <div className={style.profileInner}>
            <div className={style.bgImage}></div>
            <div className={style.mainInfo}>
                <div className={style.avatar}></div>
                <div className={style.info}>
                    <h3 className={style.name}>Anton M.</h3>
                    <p>Date of Birth: <span>10 aug</span></p>
                    <p>City: <span>Poltava</span></p>
                    <p>Education: <span>PoltNTU</span></p>
                    <p>Website: <a href='https://github.com/Miant1'>Github</a></p>
                </div>
            </div>

            <MyPosts/>

        </div>
    )
}

export default Profile;