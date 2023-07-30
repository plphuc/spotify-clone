import classNames from "classnames/bind";

import styles from './CollapseDisplay.module.scss'
import {HomeActiveIcon, HomeIcon, SearchActiveIcon, SearchIcon } from "~/components/Icons";
import NavItem from '../MenuItem/NavItem'
import { routes } from "~/routes"
import { useStateValue } from "~/utils/components/StateProvider/StateProvider";

const cx = classNames.bind(styles)

export default function CollapseDisplay() {  
    const [state, dispatch] = useStateValue()
    const playlists = (state.playlists || {}).items

    return (
      <aside className={cx("wrapper")}>
        <ul className={cx('nav-wrapper') + " radius"}>
          <NavItem
            title="Home"
            to={routes.home}
            icon={{default: <HomeIcon />, active: <HomeActiveIcon/>}}
            isShowItem={false}
            className={cx('hover-animate')}
          ></NavItem>
  
          <NavItem
            title="Search"
            to={routes.search}
            icon={{default: <SearchIcon />, active: <SearchActiveIcon/>}}
            isShowItem={false}
          ></NavItem>
        </ul>
  
        <div className={cx('playlists-wrapper') + " radius"}>
          {playlists?.map((playlist, idx) => {
            return <a key={idx} className={cx('playlist')} href="/">
              <img className={cx('playlist-thumbnail')} src={playlist.images[0].url} alt={playlist.name}></img>
              </a>
          })}
        </div>
      </aside>
    );
  }