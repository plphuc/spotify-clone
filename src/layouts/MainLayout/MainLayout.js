import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./MainLayout.module.scss";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResizeBar from "../components/ResizeBar/ResizeBar";
import { useState } from "react";
// import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);
const documentWidth = document.body.clientWidth

export default function MainLayout({ children }) {
    const [isShowItem, setIsShowItem] = useState(true);
    function handleOnScroll(e) {
        const onScrollRatio = e.target.scrollTop / 300;
        $("#header-wrapper").style.opacity =
            onScrollRatio > 1 ? 1 : onScrollRatio;
    }

    function handleResize(e) {
        const container = document.querySelector("." + cx("container"));
        const resizeElement = document.querySelector("#resizeBar");
        const sidebarElement = document.querySelector("#sidebar");
        const mainContainer = document.querySelector("." + cx("main-container"));
        const songContainers = document.querySelectorAll('.grid-song-container')

        sidebarElement.style.userSelect = "none";
        sidebarElement.style.pointerEvents = "none";

        mainContainer.style.userSelect = "none";
        mainContainer.style.pointerEvents = "none";

        // move it out of any current parents directly into body
        // to make it positioned relative to the body
        document.body.append(resizeElement);

        function handleOnDrag(event) {
            const widthSize = event.screenX;

            if (widthSize < 280) {
                setIsShowItem(false);
                sidebarElement.style.width = "64px";
                resizeElement.style.left = 64 + 8 + "px";
                return;
            } else {
                setIsShowItem(true);
            }
            sidebarElement.style.width = widthSize + "px";
            resizeElement.style.left = widthSize + 8 + "px";

            const songContainersWidth = documentWidth - sidebarElement.clientWidth
            let columnCount = 2
            if (songContainersWidth > 1230) {columnCount = 7}
            else if (songContainersWidth > 1150) {columnCount=6}
            else if (songContainersWidth > 890) {columnCount=5}
            else if (songContainersWidth > 660) {columnCount=4}
            else if (songContainersWidth > 470) {columnCount=3}

            console.log(songContainersWidth);
            
            songContainers.forEach((songContainer) => {
                songContainer.style.gridTemplateColumns = `repeat(${columnCount}, minmax(0, 1fr))`
            })
        }

        container.addEventListener("mousemove", handleOnDrag);

        container.onmouseup = function () {
            container.removeEventListener("mousemove", handleOnDrag);
            sidebarElement.style.userSelect = "auto";
            sidebarElement.style.pointerEvents = "auto";

            mainContainer.style.userSelect = "auto";
            mainContainer.style.pointerEvents = "auto";

            container.append(resizeElement);
            container.onmouseup = null;
        };
    }

    function handleDragStart() {
        return false;
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div id='main-container' className={cx('main-container')}>
                    <div id="sidebar" className={cx("sidebar-wrapper")}>
                        <Sidebar isShowItem={isShowItem} />
                    </div>

                    <ResizeBar
                        handleResize={handleResize}
                        handleDragStart={handleDragStart}
                    />

                    <div className={cx("main-content") + " radius"}>
                        <div className={cx("spacer-css")}></div>
                        <div
                            id="header-wrapper"
                            className={cx("header-wrapper")}
                        ></div>
                        <Header />
                        <div
                            className={cx("main-section-wrapper") + " radius"}
                            onScroll={handleOnScroll}
                        >
                            <div className={cx("spacer-header")}></div>
                            <div className={cx("spacer-wrapper")}>
                                <MainSection>{children}</MainSection>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={cx("footer-wrapper")}>
                        <Footer />
                    </div>
            </div>
            
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
