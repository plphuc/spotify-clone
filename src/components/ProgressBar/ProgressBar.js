import classNames from "classnames/bind";

import styles from "./ProgressBar.module.scss";

const cx = classNames.bind(styles);

export default function ProgressBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('duration-progress')}>
                <div className={cx('past-progress')}>
                    <div className={cx('duration-btn')}></div>
                </div>
            </div>
        </div>
    )
}