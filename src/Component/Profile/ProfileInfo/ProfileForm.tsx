import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import style from './ProfileFormik.module.css'

import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField
} from "@material-ui/core";



type ErrorType = {
    fullName?: string
    password?: string
    rememberMe?: boolean
}

export const ProfileFormik = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            'Full name': '',
            'looking for job': false,
            'My professional skills': '',
            'About me' : ''
        },
        onSubmit: (values) => {
            debugger
            // dispatch(login(values['Full name'], values['looking for job'], values['My professional skills']))
            formik.resetForm();
        },
        validate: (values) => {
            const errors: ErrorType = {};


            return errors;
        }
    });


    return <form onSubmit={formik.handleSubmit}>

        <div className={style.grid}>
            <div className={style.marginStyle}>
                <TextField
                    label='Full name'
                    multiline
                    rowsMax={4}
                    {...formik.getFieldProps('Full name')}
                />

            </div>

            <div className={style.marginStyle}>
                <FormControlLabel
                    label='looking for job'
                    control={<Checkbox
                        {...formik.getFieldProps('looking for job')}/>}
                />
            </div>

            <div className={style.marginStyle}>
                <TextField
                    label="My professional skills"
                    multiline
                    rows={4}
                    variant="outlined"
                    {...formik.getFieldProps("My professional skills")}
                />
            </div>

            <div className={style.marginStyle}>
                <TextField
                    label="About me"
                    multiline
                    rows={4}
                    variant="outlined"
                    {...formik.getFieldProps("About me")}
                />
            </div>

        </div>
        <Button type={'submit'} variant={'contained'} color={'primary'}>save</Button>


    </form>


}
