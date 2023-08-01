import classNames from "classnames/bind";
import { useEffect } from "react";

import styles from "./Player.module.scss";
import { useStateValue } from "~/utils/components/StateProvider/StateProvider";
import { FbIcon, IGIcon, XIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

export default function Player() {
    const [state, dispatch] = useStateValue()

    function handleResize(e) {
        const windowWidth = e.currentTarget.innerWidth
        const sidebarElement = document.querySelector("#sidebar");
        const songContainers = document.querySelectorAll('.grid-song-container')

        const songContainersWidth = windowWidth - sidebarElement.clientWidth


        let columnCount = 2
            if (songContainersWidth > 1230) {columnCount = 7}
            else if (songContainersWidth > 1150) {columnCount=6}
            else if (songContainersWidth > 890) {columnCount=5}
            else if (songContainersWidth > 660) {columnCount=4}
            else if (songContainersWidth > 470) {columnCount=3}


            songContainers.forEach((songContainer) => {
                songContainer.style.gridTemplateColumns = `repeat(${columnCount}, minmax(0, 1fr))`
            })
    }

    window.addEventListener('resize', handleResize)
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
            <div className={cx('grid-wrapper')}>
                <div className={cx('discover-playlists') + ' grid-song-container'}>
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

        <div className={cx('footer-wrapper', 'detail-info')}>
            <div className={cx('infos-wrapper')}>
                <div className={cx('infos-container')}>
                    <h3>Company</h3>
                    <div className={cx('infos-list')}>
                        <a className={cx('info-item')}>About</a>
                        <a className={cx('info-item')}>Jobs</a>
                        <a className={cx('info-item')}>For the Record</a>
                    </div>
                </div>
                <div className={cx('infos-container')}>
                    <h3>Communities</h3>
                    <div className={cx('infos-list')}>
                        <a className={cx('info-item')}>For Artists</a>
                        <a className={cx('info-item')}>Developers</a>
                        <a className={cx('info-item')}>Advertising</a>
                        <a className={cx('info-item')}>Investors</a>
                        <a className={cx('info-item')}>Vendors</a>
                        <a className={cx('info-item')}>Spotify for Work</a>
                    </div>
                </div>
                <div className={cx('infos-container')}>
                    <h3>Useful links</h3>
                    <div className={cx('infos-list')}>
                        <a className={cx('info-item')}>Support</a>
                        <a className={cx('info-item')}>Web Player</a>
                        <a className={cx('info-item')}>Free Mobile App</a>
                    </div>
                </div>
            </div>
            <div className={cx('infos-wrapper')}>
                <a className={cx('contact-info')}><IGIcon/></a>
                <a className={cx('contact-info')}><XIcon/></a>
                <a className={cx('contact-info')}><FbIcon/></a>
            </div>
        </div>

        <div className={cx('footer-wrapper')}>
            <div className={cx('infos-wrapper')}>
                <div className={cx('infos')}>
                    <div className={cx('info-item', 'no-underline')}><a href="/">Legal</a></div>
                    <div className={cx('info-item', 'no-underline')}><a href="/">Privacy Center</a></div>
                    <div className={cx('info-item', 'no-underline')}><a href="/">Privacy Policy</a></div>
                    <div className={cx('info-item', 'no-underline')}><a href="/">Cookies</a></div>
                    <div className={cx('info-item', 'no-underline')}><a href="/">About Ads</a></div>
                    <div className={cx('info-item', 'no-underline')}><a href="/">Accessibility</a></div>
                    <div className={cx('info-item', 'no-underline')}><a href="/">Cookies</a></div>
                </div>
            </div>
            <div className={cx('copy-right')}><p>© 2023 Spotify AB</p></div>
        </div>
    </div>
    );
}
