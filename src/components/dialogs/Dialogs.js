import React from "react";
import style from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageCreator, updateMessageTextCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messageData.map( m => <MessageItem text={m.message}/>);
    let newMessageBodyText = props.state.newMessageBody;

    let sendMessage = () => {
        props.dispatch(addMessageCreator());
    }
    let onChangeMessageText = (e) => {
        let body = e.target.value;
        props.dispatch(updateMessageTextCreator(body));
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div className={style.textarea}>
                    <textarea
                        value={newMessageBodyText}
                        onChange={onChangeMessageText}
                        placeholder='Message...'/>
                </div>
                <button
                    onClick={sendMessage}
                >Send</button>
            </div>
        </div>
    )
}

export default Dialogs;