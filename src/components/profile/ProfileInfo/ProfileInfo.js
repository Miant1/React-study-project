import React from "react";
import style from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return(
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
    )
}

export default ProfileInfo;