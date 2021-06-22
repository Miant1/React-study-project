import React from "react";
import style from './Friends.module.scss';

const Friends = (props) => {

    let friends = props.friendList.map(item => <a href='#'>{item.name}</a>)

    return(
        <div className={style.wrapper}>
            {friends}
        </div>
    )
}

export default Friends;