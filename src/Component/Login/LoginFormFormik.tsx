import {useFormik} from "formik";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@material-ui/core";
import React from "react";
import {login} from "../../Redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router";

type ErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    "Please inter the symbols"?: string
}


export const LoginForm = () => {
    const isAuth = useSelector<AppStateType, boolean>((state) => state.auth.isAuth);
    const captchaUrl = useSelector<AppStateType, string | null>((state) => state.auth.captchaUrl);
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            "Please inter the symbols": '',
            rememberMe: false
        },
        onSubmit: (values) => {
            dispatch(login(values.email, values.password, values.rememberMe, values["Please inter the symbols"]))
            formik.resetForm();
        },
        validate: (values) => {
            const errors: ErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Password must be at least 3 characters';
            }


            return errors;
        }
    });

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }




    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            type='email'
                            {...formik.getFieldProps('email')}
                        />
                        {
                            formik.touched.email && formik.errors.email
                                ? <div style={{color: "red"}}>{formik.errors.email}</div> : null
                        }
                        <TextField
                            label="Password"
                            margin="normal"
                            type="password"
                            {...formik.getFieldProps('password')}
                        />
                        {
                            formik.touched.password && formik.errors.password
                                ? <div style={{color: "red"}}>{formik.errors.password}</div> : null
                        }
                        <FormControlLabel
                            label='Remember me'
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}/>}
                        />
                        {captchaUrl && <img src={captchaUrl}/>}
                        {
                            captchaUrl && <TextField
                                label="Please inter the symbols"
                                margin="normal"
                                type="text"
                                {...formik.getFieldProps('Please inter the symbols')}
                            />
                        }
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}