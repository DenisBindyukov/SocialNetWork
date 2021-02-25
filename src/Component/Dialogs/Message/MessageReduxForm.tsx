import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "../Dialogs.module.css";

export type FormDataType = {
    message: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  className={style.superInput} component={'input'}  name={'message'}/>
            </div>
            <div>
                <button className={style.myButton}>Add message</button>
            </div>
        </form>
    )
}


export const MessageReduxForm = reduxForm<FormDataType>(
    {
        form: 'message'
    })(AddMessageForm);