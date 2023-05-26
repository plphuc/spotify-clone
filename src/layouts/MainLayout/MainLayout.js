import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './MainLayout.module.scss'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const cx = classNames.bind(styles)

export default function MainLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}

MainLayout.propTypes  = {
    children: PropTypes.node.isRequired
}