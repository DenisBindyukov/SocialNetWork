import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from "../../Redux/redux-store";
import {setAppError} from "../../Redux/auth-reducer";
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar(): JSX.Element {
    //const [open, setOpen] = React.useState(true)
    const error = useSelector<AppStateType, string | null>(state => state.auth.error);
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppError(null));
    }


    const isOpen = error !== null;

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
