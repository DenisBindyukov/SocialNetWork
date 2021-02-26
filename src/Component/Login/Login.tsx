import React from 'react'
import {LoginForm} from "./LoginFormFormik";
import {InjectedFormProps,reduxForm,Field} from "redux-form";

export const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
}




// type FormDataType  = {
//     login: string
//     password: string
//     rememberMe: boolean
// }

// const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//
//     return(
//             <form onSubmit={props.handleSubmit}>
//                 <div>
//                     <Field  component={'input'} placeholder={`Login`} name={'login'}/>
//                 </div>
//                 <div>
//                     <Field component={'input'} placeholder={`Password`} name={'password'}/>
//                 </div>
//                 <div>
//                     <Field component={'input'} type={'checkbox'} name={'rememberMe'} /> remember me
//                 </div>
//                 <div>
//                     <button>Login</button>
//                 </div>
//             </form>
//     );
// }
//
//
// const LoginReduxForm = reduxForm<FormDataType>(
//     {
//         form: 'login'
//     })(LoginForm);




// export const Login = () => {
//     const onSubmit = (formData: FormDataType) => {
//         console.log(formData)
//     }
//     return(
//         <div>
//             <h1>Login</h1>
//             <LoginReduxForm onSubmit={onSubmit} />
//         </div>
//     );
// }
//
//

