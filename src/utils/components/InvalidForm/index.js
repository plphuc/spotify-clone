import classNames from "classnames/bind";

import styles from "./InvalidForm.module.scss";
import { WarningIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

export default function InvalidForm({ content }) {
    return (
        <div className={cx("wrapper")}>
            <WarningIcon />
            <span>{content}</span>
        </div>
    );
}
