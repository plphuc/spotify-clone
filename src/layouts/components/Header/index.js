import classNames from "classnames/bind";

import { BackArrowIcon, ForwardArrowIcon } from "~/components/Icons";
import Button from "~/components/Button";
import styles from './Header.module.scss'
import config from "~/config";

const cx = classNames.bind(styles)

export default function Header() {
     return (
        <header className={cx('wrapper')}>
            <div className={cx('direct-group')}>
                <Button className={cx('direct-btn')}><BackArrowIcon/></Button>
                <Button className={cx('direct-btn')}><ForwardArrowIcon/></Button>
            </div>
            <div className={cx('content-wrapper')}> {/* searchbar, content is added here*/}</div> 
            {/* <Button className={cx('opt-btn')} zoominHover>Upgrade</Button>
            <Button className={cx('opt-btn')} inheritColor zoominHover leftIcon={<DownloadIcon/>}>Install App</Button>
            <Button className={cx('opt-btn', 'user-btn')} zoominHover inheritColor><PersonIcon/></Button> */} 
            <Button className={cx('opt-btn')} inheritColor zoominHover to={config.routes.signup}>Sign up</Button>
            <Button zoominHover className={cx('login-btn')} to={config.routes.login}>Log in</Button>
        </header>
    )
}