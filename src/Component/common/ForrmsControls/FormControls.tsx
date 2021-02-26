import React from 'react';
import style from './FormControls.module.css'

type DefaultInputPropsType = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type SuperInputTextPropsType = DefaultInputPropsType

export const TextArea:  React.FC<SuperInputTextPropsType> = ({inputMode,...props}) => {
    debugger
    return (
        <div className={style.formControl + ' ' + style. error}>
            <textarea {...inputMode} {...props} />
        </div>
    );
}


// import React, {
//     useState,
//     useEffect,
//     useRef,
//     TextareaHTMLAttributes,
// } from "react";
//
// export const AutoTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
//     const textAreaRef = useRef<HTMLTextAreaElement>(null);
//     const [text, setText] = useState("");
//     const [textAreaHeight, setTextAreaHeight] = useState("auto");
//     const [parentHeight, setParentHeight] = useState("auto");
//
//     useEffect(() => {
//         setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
//         setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
//     }, [text]);
//
//     const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setTextAreaHeight("auto");
//         setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
//         setText(event.target.value);
//
//         if (props.onChange) {
//             props.onChange(event);
//         }
//     };
//
//     return (
//
// 			<textarea
//                 {...props}
//                 ref={textAreaRef}
//                 rows={1}
//                 style={{
//                     height: textAreaHeight,
//                 }}
//                 onChange={onChangeHandler}
//             />
//     );
// };