import React from "react";
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Friends from "./friends/Friends";

const Navbar = (props) => {
    return(
        <div>
            <nav className={style.nav}>
                <NavLink to="/profile" className={style.item} activeClassName={style.active}>Profile</NavLink>     {/* Так мы добавляем несколько классов*/}
                <NavLink to="/dialogs" className={style.item} activeClassName={style.active}>Messages</NavLink>
            </nav>

            <Friends friendList={props.state.friends}/>
        </div>
    )
}

export default Navbar;