import React from "react";
import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}></div>
        </header>
    )
}

export default Header;