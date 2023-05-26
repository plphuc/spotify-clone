import classNames from "classnames/bind";

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

export default function Header() {
    return (
        <div className={cx('wrapper')}>
            <h1>Header</h1>
        </div>
    )
}