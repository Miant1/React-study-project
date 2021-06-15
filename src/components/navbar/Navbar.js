import React from "react";
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={style.nav}>
            <NavLink to="/profile" className={style.item} activeClassName={style.active}>Profile</NavLink>     {/* Так мы добавляем несколько классов*/}
            <NavLink to="/dialogs" className={style.item} activeClassName={style.active}>Messages</NavLink>
        </nav>
    )
}

export default Navbar;