import classNames from "classnames/bind";
import styles from "./ResizeBar.module.scss";

const cx = classNames.bind(styles);

export default function ResizeBar({ handleResize, handleDragStart }) {

    return (
        <div
            id="resizeBar"
            className={cx("wrapper")}
            onDragStart={handleDragStart}
            onMouseDown={handleResize}
        ></div>
    );
}
