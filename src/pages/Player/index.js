import classNames from "classnames/bind";
import { useEffect } from "react";

import styles from "./Player.module.scss";
import { useStateValue } from "~/utils/components/StateProvider/StateProvider";

const cx = classNames.bind(styles);

export default function Player() {
    const [state, dispatch] = useStateValue()
    // Handle token
    useEffect(() => {
        const tokenStorage = JSON.parse(localStorage.getItem("value") || '{}')
        if (!state.access_token) {
            dispatch({
                type: "SET_ACCESS_TOKEN",
                access_token: tokenStorage.access_token,
            });

            dispatch({
                type: "SET_REFRESH_TOKEN",
                refresh_token: tokenStorage.refresh_token,
            });
            
        } else if (state.access_token !== tokenStorage.access_token) {
            const token = {
                access_token: state.access_token,
                refresh_token: tokenStorage.refresh_token ? tokenStorage.refresh_token : state.refresh_token
            }
            localStorage.setItem("value", JSON.stringify(token));
        }
    }, [state, dispatch])
    return (
        <div className={cx('wrapper')}>
            <h1>Discovery Weekly</h1>
            <a className={cx("top-discover-playlist")} href="/">
                <img className={cx("discover-thumbnail")} src={state.discover_weekly[0].images[0].url} alt={state.discover_weekly[0].name}></img>
                <div className={cx('discover-info')}>
                    <span className={cx('discover-type')}>{state.discover_weekly[0].type}</span>
                    <h1 className={cx('discover-title')}>{state.discover_weekly[0].name}</h1>
                    <span>{state.discover_weekly[0].owner.display_name}  •  {state.discover_weekly[0].tracks.total} songs</span>
                </div>
            </a>

            {/* Display remaining discover playlists */}
            <h1>Made for you</h1>
            <div className={cx('discover-playlists')}>
                {state.discover_weekly.slice(0).map((playlist, idx) => {
                    return (
                        <div key={idx} className={cx('song-wrapper')} >
                            <a className={cx("song-item")} href="/">
                                <img className={cx("song-thumbnail")} src={playlist.images[0].url} alt={playlist.name}></img>
                                <div className={cx('song-info')}>
                                    <h1 className={cx('song-title')}>{playlist.name}</h1>
                                    <span className={cx('song-desc')}>{playlist.owner.display_name}</span>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
