import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "./MyPosts.module.css";
import {maxLength, requiredField} from "../../../utils/validators";
import {TextArea} from "../../common/ForrmsControls/FormControls";


export type FormDataType = {
    message: string
}

const maxLengthUtil= maxLength(10)


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={TextArea}  name={'message'} validate={[requiredField,maxLengthUtil]}/>
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