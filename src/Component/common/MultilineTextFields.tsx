import React,{KeyboardEvent} from "react";
import {Button, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '45ch',
            },
        },
    }),
);

type MultilineTextFieldsType = {
    sendNewPost: (value: string) => void
}

export const MultilineTextFields: React.FC<MultilineTextFieldsType> = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [error, SetError] = React.useState<null | string>(null);
    console.log(value)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetError(null)
        setValue(event.target.value);
    };

    const sendMessage = () => {
        if(!value) {
            SetError('Please inter text')
        } else {
            props.sendNewPost(value)
            setValue('')
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
         if ( event.key == 'Enter' && value) {
            props.sendNewPost(value)
            setValue('')
            event.preventDefault();
        } else if (!value) {
            SetError('Please inter text')
        }
    }

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                variant="outlined"
                value={value.trim()}
                onChange={handleChange}
                onKeyPress={onKeyPressHandler}
            />
            {
                error ? <div style={{color: "red"}}>{error}</div> : null
            }
            <div>
                <Button type={'submit'} variant={'contained'} color={'primary'} onClick={sendMessage}>Send</Button>
            </div>

        </div>
    );
}


// export const AddMessageForm = () => {
//
//     const classes = useStyles();
//
//     const [value, setValue] = React.useState('Controlled');
//
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(event.target.value);
//     };
//
//     // const formik = useFormik({
//     //     initialValues: {
//     //         text: '',
//     //     },
//     //     onSubmit: (values) => {
//     //         console.log(values.text)
//     //         formik.resetForm();
//     //     },
//     //     validate: (values) => {
//     //         const errors: ErrorType = {};
//     //
//     //         if (!values.text) {
//     //             errors.text = 'Please inter message';
//     //         }
//     //         return errors;
//     //     }
//     // });
//
//     return (
//         <div>
//             <TextField
//                 id="outlined-multiline-static"
//                 label="Multiline"
//                 multiline
//                 rows={4}
//                 defaultValue="Default Value"
//                 variant="outlined"
//                 value={value}
//                 onChange={handleChange}
//             />
//             {/*/ {*/}
//             {/*//     formik.errors.text*/}
//             {/*//         ? <div style={{color: "red"}}>{formik.errors.text}</div> : null*/}
//             {/*// }*/}
//               <div>
//                  <Button type={'submit'} variant={'contained'} color={'primary'}>Send</Button>
//               </div>
//
//             </div>
//     );
// }
