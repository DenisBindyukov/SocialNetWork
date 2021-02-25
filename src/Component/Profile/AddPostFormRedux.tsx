import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "./MyPosts/MyPosts.module.css";

export type FormDataType = {
    message: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={style.superInput} component={'textarea'}  name={'message'}/>
            </div>
            <div>
                <button className={style.myButton}>Add post</button>
            </div>
        </form>
    )
}


export const AddPostReduxForm = reduxForm<FormDataType>(
    {
        form: 'message'
    })(AddMessageForm);