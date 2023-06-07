import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./LoginLayout.module.scss";
import { LogoIcon } from "~/components/Icons";
import config from "~/config";

const cx = classNames.bind(styles);

export default function LoginLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header-wrapper")}>
                <div className={cx("header")}>
                    <Link to={config.routes.home}><LogoIcon /></Link>
                </div>
            </div>
            <div className={cx("body-wrapper")}>{children}</div>
        </div>
    );
}
