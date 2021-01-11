import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string | null
    logOffAuth: (value: boolean) => void
}

export const Header: React.FC<HeaderType> = (props) => {

    return (
        <div className={style.header}>
            <img src="https://i.ytimg.com/vi/ILxgWFYLtTQ/maxresdefault.jpg" alt=""/>

            <div className={style.loginBlock}>
                {props.isAuth ? `User - ${props.login} online`
                    : <NavLink to={'/login'} activeClassName={style.active} onClick={ () => props.logOffAuth(props.isAuth) }>Login</NavLink>}

                {props.isAuth && <div className={style.button_log}>
                    <button onClick={ () => props.logOffAuth(props.isAuth) }> Log out</button>
                </div>}
            </div>
        </div>
    );
}

