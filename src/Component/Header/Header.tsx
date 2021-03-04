import React from "react";
import style from './Header.module.css';

type HeaderType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header: React.FC<HeaderType> = React.memo((props) => {

    return (
        <div className={style.header}>
            <img src="https://i.ytimg.com/vi/ILxgWFYLtTQ/maxresdefault.jpg" alt=""/>

            <div className={style.loginBlock}>
                {
                    props.isAuth && `User - ${props.login} online` &&
                    <div className={style.button_log}>
                        <button onClick={props.logout}> Log out</button>
                    </div>
                }
            </div>
        </div>
    );
})

