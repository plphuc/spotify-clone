import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import { LoveIcon, PicInPicIcon } from "~/components/Icons";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("info-wrapper")}>
                <img 
                    className={cx('info-image')}
                    src="https://i.scdn.co/image/ab67616d000048515a42123d217f8c248ec1a92d"
                    alt="haha"
                />
                <span className={cx('info-desc')}>
                    <div style={{fontSize: "14px"}}>FLOWER</div>
                    <div style={{color: "var(--text-desc-color)", fontSize: "11px"}}>JISOO</div>
                </span>
                <div className={cx('info-icons')}>
                    <Button inheritColor className={cx('info-icon')}><LoveIcon /></Button>
                    <Button inheritColor className={cx('info-icon')}><PicInPicIcon /></Button>
                </div>
            </div>
            <div className={cx('player-wrapper')}>

            </div>
        </footer>
    );
}
