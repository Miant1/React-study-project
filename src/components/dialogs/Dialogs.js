import React from "react";
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogElement = props.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.messageData.map( m => <MessageItem text={m.message}/>)

    return(
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;