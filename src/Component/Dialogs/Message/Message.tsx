import React from "react";
import style from './Message.module.css';

type MessageType = {
    message: string
    id: number
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div>
            <div>
                {props.message}
            </div>
        </div>
    );
}

export default Message;