import classNames from "classnames/bind";

import styles from "./ProgressBar.module.scss";

const cx = classNames.bind(styles);

export default function ProgressBar() {

    function handleChangeDuration(event) {
        const targetElement = event.target
        const documentElement = document.querySelector('body')

        // Closet to find parent while querySelector to find child
        const currentElement = targetElement.closest("." + cx("duration-progress")) || targetElement.querySelector("." + cx("duration-progress"));
        const pastProgressElement = targetElement.closest("." + cx("past-progress")) || targetElement.querySelector("." + cx("past-progress"));
        const durationBtnElement = targetElement.closest("." + cx("duration-btn")) || targetElement.querySelector("." + cx("duration-btn"));

        const currentElementWidth = currentElement.clientWidth
        const currentElementOffsetLeft = currentElement.offsetLeft
        const currentElementOffsetRight = currentElementOffsetLeft + currentElementWidth
        let currentOffsetLeft
        
        function handleMouseMove(e) {
            documentElement.style.userSelect = "none";

            currentOffsetLeft = e.clientX - currentElementOffsetLeft;

            if(currentElementOffsetLeft < e.clientX && e.clientX < currentElementOffsetRight) {
                pastProgressElement.style.width =  currentOffsetLeft + "px";
                durationBtnElement.style.left = currentOffsetLeft + "px";
            }
        }

        documentElement.addEventListener('mousemove', handleMouseMove)
        
        documentElement.onmouseup = function(e) {
            // Update progress btn + past progress here (used for onClick)
            if (e.target.isSameNode(pastProgressElement) || e.target.isSameNode(currentElement)) {
                currentOffsetLeft = e.clientX - currentElementOffsetLeft;
                
                pastProgressElement.style.width = currentOffsetLeft + "px";
                durationBtnElement.style.left = currentOffsetLeft + "px";
            }
            
            // Remove listener and something
            documentElement.style.userSelect = "auto";
            documentElement.removeEventListener('mousemove', handleMouseMove)
            documentElement.onmouseup = null
        }
    }
    return (
        <div className={cx("wrapper")}>
            <div
                className={cx("duration-progress")}
                onMouseDown={handleChangeDuration}
            >
                <div className={cx("past-progress")}>
                    <div className={cx("duration-btn")}></div>
                </div>
            </div>
        </div>
    );
}
