import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from './NavItem.module.scss'

const cx = classNames.bind(styles)

export default function NavItem({title, to, icon, className, isShowItem}) {
    return (
        <NavLink to={to} className={(nav) => cx('nav-item', {active: nav.isActive})}>
            <span className={cx('icon')}>{icon.default}</span>
            <span className={cx('active-icon')}>{icon.active}</span>
            {isShowItem ? <span>{title}</span> : <></>}
        </NavLink>
    )
}