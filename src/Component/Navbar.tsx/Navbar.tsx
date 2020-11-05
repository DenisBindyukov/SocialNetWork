import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type NavbarType = {}

const Navbar: React.FC<NavbarType> = (props) => {

    return (
        <nav className={style.nav}>
            <div className={`${style.item}`}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Message</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to ='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='setting' activeClassName={style.active}>Setting</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;