import classNames from "classnames/bind";

import styles from './MainSection.module.scss'

// eslint-disable-next-line
const cx = classNames.bind(styles)

export default function MainSection({children}) {
    return (
        <>{children}</>
    )
}