import classNames from "classnames/bind";

import styles from "./PlayerControl.module.scss";
import {
    NextIcon,
    PauseIcon,
    PlayIcon,
    PrevIcon,
    RepeatIcon,
    ShuffleIcon,
} from "~/components/Icons";
import Button from "~/components/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useState } from "react";
const cx = classNames.bind(styles);
export default function PlayerControl() {
    const [isPlaying, setIsPlaying] = useState(false)

    function handlePlayPause() {
        setIsPlaying(!isPlaying)
        const updatedState = !isPlaying
        const playBtnElement = document.querySelector('.' + cx('play-music'))
        const pauseBtnElement = document.querySelector('.' + cx('pause-music'))

        if(updatedState) {
            playBtnElement.style.display = 'flex'
            pauseBtnElement.style.display = 'none'
        }
        else {
            playBtnElement.style.display = 'none'
            pauseBtnElement.style.display = 'flex'
        }
    }
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

                <div className={cx("player-control-playpause", 'play-music')} onClick={handlePlayPause}>
                    <Button className={cx("info-icon")}>
                        <PlayIcon/>
                    </Button>
                </div>

                <div className={cx("player-control-playpause", 'pause-music')}  onClick={handlePlayPause}>
                        <Button className={cx("info-icon")}>
                            <PauseIcon/>
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
