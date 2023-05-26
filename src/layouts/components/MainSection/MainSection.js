import classNames from "classnames/bind";

import styles from './MainSection.module.scss'

const cx = classNames.bind(styles)

export default function MainSection() {
    return (
        <div className={cx('wrapper')}>
            <h1>Main Section</h1>
        </div>
    )
}