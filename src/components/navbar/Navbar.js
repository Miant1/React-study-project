import React from "react";
import style from './Navbar.module.scss';

const Navbar = () => {
    return(
        <nav className={style.nav}>
            <a href="/profile" className={`${style.item} ${style.active}`}>Profile</a>     {/* Так мы добавляем несколько классов*/}
            <a href="/dialogs" className={style.item}>Messages</a>
        </nav>
    )
}

export default Navbar;