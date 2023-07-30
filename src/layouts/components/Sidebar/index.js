import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import {HomeActiveIcon, HomeIcon, LikedSongsIcons, LogoIcon, SearchActiveIcon, SearchIcon } from "~/components/Icons";
import NavItem from "./MenuItem/NavItem";
import { routes } from "~/routes"
import { useStateValue } from "~/utils/components/StateProvider/StateProvider";
import CollapseDisplay from "./CollapseDisplay/CollapseDisplay";

const cx = classNames.bind(styles);

export default function Sidebar({isShowItem}) {
  const [state, dispatch] = useStateValue()
  const playlists = (state.playlists || {}).items

  return (
    <>{isShowItem ? <aside className={cx("wrapper") + " radius"}>
      <a href="/" className={cx("logo-wrapper")}>
        <LogoIcon className={cx("logo")} />
      </a>

      <ul>
        <NavItem
          title="Home"
          to={routes.home}
          icon={{default: <HomeIcon />, active: <HomeActiveIcon/>}}
          className={cx('hover-animate')}
          isShowItem
        ></NavItem>

        <NavItem
          title="Search"
          to={routes.search}
          icon={{default: <SearchIcon />, active: <SearchActiveIcon/>}}
          isShowItem
        ></NavItem>
      </ul>

      <div className={cx('actions')}>
        <div className={cx('action')}>
          <span className={cx('icon', 'liked-icon')}><LikedSongsIcons/></span>
          Liked Songs
          </div>
      </div>

      <div className={cx('playlists')}>
        {playlists?.map((playlist, idx) => {
          return <a key={idx} className={cx('playlist')} href="/">
            <img className={cx('playlist-thumbnail')} src={playlist.images[0].url} alt={playlist.name}></img>
            <div className={cx('playlist-info')}>
            {playlist.name}
            <span className={cx('playlist-des')}> 
                  Playlist • {playlist.owner.display_name}
            </span>
            </div>
            </a>
        })}
      </div>

      <div className={cx('wrapper-infos')}>
        <div className={cx('infos')}>
          <div className={cx('info-item')}><a href="/">Legal</a></div>
          <div className={cx('info-item')}><a href="/">Privacy Center</a></div>
          <div className={cx('info-item')}><a href="/">Privacy Policy</a></div>
          <div className={cx('info-item')}><a href="/">Cookies</a></div>
          <div className={cx('info-item')}><a href="/">About Ads</a></div>
          <div className={cx('info-item')}><a href="/">Accessibility</a></div>
        </div>

        <div className={cx('info-item')}><a href="/" className={cx('underline')}>Cookies</a></div>

      </div>
    </aside> : <CollapseDisplay/>}</>
  );
}
