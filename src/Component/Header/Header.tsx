import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {}

const Header: React.FC<HeaderType> = (props) => {

    return (
        <div className={style.header} >
            <img src="https://i.ytimg.com/vi/ILxgWFYLtTQ/maxresdefault.jpg" alt=""/>

            <div className={style.loginBlock}>
            <NavLink to={'/login'} activeClassName={style.active}>Login</NavLink>
            </div>
        </div>
    );
}

export default Header;