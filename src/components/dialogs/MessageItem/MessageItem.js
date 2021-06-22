import React from "react";
import style from './MessageItem.module.scss';

const MessageItem = (props) => {
    return(
        <div>
            <div className={style.message}>{props.text}</div>
        </div>

    )
}

export default MessageItem;