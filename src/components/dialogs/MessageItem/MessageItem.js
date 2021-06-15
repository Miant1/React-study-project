import React from "react";
import style from './MessageItem.module.scss';

const MessageItem = (props) => {
    return(
        <div className={style.message}>{props.text}</div>
    )
}

export default MessageItem;