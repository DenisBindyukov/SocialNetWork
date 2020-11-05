import React from "react";
import style from './Header.module.css';

type HeaderType = {}

const Header: React.FC<HeaderType> = (props) => {

    return (
        <div className={style.header} >
            <img src="https://i.ytimg.com/vi/ILxgWFYLtTQ/maxresdefault.jpg" alt=""/>
        </div>
    );
}

export default Header;