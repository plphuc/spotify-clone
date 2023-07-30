import classNames from "classnames/bind";

import styles from "./MorePlayerControl.module.scss";
import { DeviceIcon, MicIcon, QueueIcon, SpeakerIcon } from "../Icons";
import ProgressBar from "../ProgressBar/ProgressBar";

const cx = classNames.bind(styles);

export default function MorePlayerControl() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('icon')}><MicIcon/></button>
            <button className={cx('icon')}><QueueIcon/></button>
            <button className={cx('icon')}><DeviceIcon/></button>
            <div className={cx('volume-wrapper')}>
                <button className={cx('icon')}><SpeakerIcon/></button>
                <ProgressBar/>
            </div>
        </div>
    )
}