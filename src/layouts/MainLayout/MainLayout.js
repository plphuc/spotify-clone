import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./MainLayout.module.scss";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

export default function MainLayout({ children }) {
    function handleOnScroll(e) {
        $("#header-wrapper").style.opacity = e.target.scrollTop / 300;
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("sidebar-wrapper")}>
                <Sidebar />
            </div>
            <div className={cx("container")}>
                <div id="header-wrapper" className={cx("header-wrapper")}></div>
                <Header />
                <div
                    className={cx("main-section-wrapper")}
                    onScroll={handleOnScroll}
                >
                    <div className={cx("spacer-header")}></div>
                    <div className={cx("spacer-wrapper")}>
                        <div className={cx("spacer-css")}></div>
                        <MainSection>{children}</MainSection>
                    </div>
                </div>
            </div>
            <div className={cx("footer-wrapper")}>
                <Footer />
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
