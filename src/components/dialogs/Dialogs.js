import React from "react";
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messageData.map( m => <MessageItem text={m.message}/>);

    let createRef = React.createRef();

    let sendMessage = () => {
        let getText = createRef.current.value;
        alert(getText)
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div className={style.textarea}>
                    <textarea ref={createRef} placeholder='Message...'></textarea>
                </div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;