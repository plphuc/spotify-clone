import classNames from "classnames/bind";

import styles from "./PlayerControl.module.scss";
import {
    NextIcon,
    PlayIcon,
    PrevIcon,
    RepeatIcon,
    ShuffleIcon,
} from "~/components/Icons";
import Button from "~/components/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
const cx = classNames.bind(styles);
export default function PlayerControl() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("player-control-btns")}>
                <div className={cx("player-control-left")}>
                    <button className={cx("info-icon")}>
                        <ShuffleIcon />
                    </button>
                    <button className={cx("info-icon")}>
                        <PrevIcon />
                    </button>
                </div>

                <div className={cx("player-control-playpause")}>
                    <Button className={cx("info-icon")}>
                        <PlayIcon />
                    </Button>
                </div>

                <div className={cx("player-control-right")}>
                    <button className={cx("info-icon")}>
                        <NextIcon />
                    </button>
                    <button className={cx("info-icon")}>
                        <RepeatIcon />
                    </button>
                </div>
            </div>
            <div className={cx("playback-bar")}>
                <div className={cx("time-start")}>
                    <span>0:00</span>
                </div>
                <ProgressBar />
                <div className={cx("time-end")}>
                    <span>10:00</span>
                </div>
            </div>
        </div>
    );
}
