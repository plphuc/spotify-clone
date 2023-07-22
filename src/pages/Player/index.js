import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Player.module.scss";
import { useStateValue } from "~/utils/components/StateProvider/StateProvider";

const cx = classNames.bind(styles);

export default function Player() {
    const [state, dispatch] = useStateValue()

    // Handle token
    useEffect(() => {
        const tokenStorage = JSON.parse(localStorage.getItem("value") || '{}')
        if (!state.access_token) {
            state.access_token = tokenStorage.access_token;
            state.refresh_token = tokenStorage.refresh_token;
        } else if (state.access_token !== tokenStorage.access_token) {
            localStorage.setItem("value", JSON.stringify(state));
        }
    }, [state])
    return (
        <>
            <h1>Hello you're innnn</h1>
        </>
    );
}
