import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import { AddIcon, GlobalIcon, HomeActiveIcon, HomeIcon, LikedSongsIcons, LogoIcon, PlaylistActiveIcon, PlaylistIcon, SearchActiveIcon, SearchIcon } from "~/components/Icons";
import config from "~/config";
import NavItem from "./MenuItem/NavItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <a href="/" className={cx("logo-wrapper")}>
        <LogoIcon className={cx("logo")} />
      </a>

      <ul>
        <NavItem
          title="Home"
          to={config.routes.home}
          icon={{default: <HomeIcon />, active: <HomeActiveIcon/>}}
          className={cx('hover-animate')}
        ></NavItem>

        <NavItem
          title="Search"
          to={config.routes.search}
          icon={{default: <SearchIcon />, active: <SearchActiveIcon/>}}
        ></NavItem>

        <NavItem
          title="Your Library"
          to={config.routes.playlist}
          icon={{default: <PlaylistIcon />, active: <PlaylistActiveIcon/>}}
        ></NavItem>
      </ul>

      <div className={cx('actions')}>
        <div className={cx('action')}>
          <span className={cx('icon')}><AddIcon/></span>
          Create Playlist
          </div>
        <div className={cx('action')}>
          <span className={cx('icon', 'liked-icon')}><LikedSongsIcons/></span>
          Liked Songs
          </div>
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

      <div className={cx('language')}>
        <Button leftIcon={<GlobalIcon/>} inheritColor outline zoominHover>English</Button>
      </div>
    </aside>
  );
}
