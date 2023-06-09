import classNames from "classnames/bind";

import styles from "./SwitchButton.module.scss";

const cx = classNames.bind(styles);

export default function SwitchButton({children, title}) {
    return (
        <div className={cx("wrapper")}>
            <label class={cx("switch")}>
                <input type="checkbox" defaultChecked/>
                <span class={cx("slider")}></span>
            </label>
            <div>
                <span className={cx('title')}>{title}</span>
                {children}
            </div>
        </div>
    );
}
