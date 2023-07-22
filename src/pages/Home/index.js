import classNames from "classnames/bind";
import { useContext, useEffect, useRef, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import styles from "./Home.module.scss";
import { useStateValue } from "~/utils/components/StateProvider/StateProvider";
import Player from "../Player";
import {
    redirectUri,
    paramsToObject,
    clientId,
    clientSecret,
} from "~/utils/connector/config";

const cx = classNames.bind(styles);
const spotify = new SpotifyWebApi();

export default function Home() {
    const [state, dispatch] = useStateValue();
    const [token, setToken] = useState({
        access_token: null,
        refresh_token: null
    })
    console.log(token);
    const refreshTime = useRef(null);

    const getTokenFromUrl = async () => {
        // Get code from url
        const params = paramsToObject(
            new URLSearchParams(window.location.search).entries()
        );
        if (!params.code) {
            return;
        }

        try {
            // Get response from code below
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    body: new URLSearchParams({
                        grant_type: "authorization_code",
                        code: params.code,
                        redirect_uri: redirectUri,
                        client_id: clientId,
                        client_secret: clientSecret,
                    }),
                } 
            );
            // Set new access_token and refresh_token
            response.json().then((response) => {
                if (response.access_token && response.refresh_token) {
                    setToken({
                        access_token: response.access_token,
                        refresh_token: response.refresh_token
                    });

                }
            });
            // window.location = ""
        } catch (err) {}
    };

    const refreshToken = async () => {
        // If refresh_token is nulll --> access_token is invalid
        if (!token.refresh_token) {
            token.access_token = null;
        }

        // Call new reponse to refresh access_token (change grant_type to refresh_token)
        // Reponse of requesting a refresh access_token does not have refresh_token
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: token.refresh_token,
                client_id: clientId,
                client_secret: clientSecret,
            }),
        });

        response.json().then((response) => {
            if (response.access_token) {
                setToken({
                    ...token,
                    access_token: response.access_token
                });
            }
        });
    };

    // useEffect triggers evertime token is changed
    useEffect(() => {
        console.log(token);
        // A function that is used in useEffect should be defined inside useEffect
        const apiCallErrorHandler = (error) => {
            // If access_token is expired or has not been set --> refresh token
            if (
                !refreshTime.current ||
                Date.now() - refreshTime.current > 1800
            ) {
                // refresh
                refreshToken();
                refreshTime.current = Date.now();
            }
        };

        const tokenStorage = JSON.parse(
            localStorage.getItem("value") || "{}"
            ).access_token;

        let _token = token.access_token;


        //  When page is reloaded (not re-render) but have requested access_token from spotify
        // ---> Get access_token from localStorage
        if (!token.access_token && tokenStorage) {
            _token = tokenStorage
        }

        // _token = token.access_token
        // after authorized with spotify -> url contains code -> getTokenFromUrl()
        if (!_token) {
            getTokenFromUrl();
            return;
        }

        // Set state when token.access_token is true
        if (_token) {
            console.log(123);
            spotify.setAccessToken(_token);
            dispatch({
                type: "SET_ACCESS_TOKEN",
                access_token: token.access_token,
            });

            dispatch({
                type: "SET_REFRESH_TOKEN",
                refresh_token: token.refresh_token,
            });

            spotify.getPlaylist("60Gb1yMwUUov9d9KiOpsYF").then(
                (response) =>
                    dispatch({
                        type: "SET_DISCOVER_WEEKLY",
                        discover_weekly: response,
                    }),
                apiCallErrorHandler
            );

            spotify.getMyTopArtists().then(
                (response) =>
                    dispatch({
                        type: "SET_TOP_ARTISTS",
                        top_artists: response,
                    }),
                apiCallErrorHandler
            );

            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
            });

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user,
                });
            }, apiCallErrorHandler);

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists,
                });
            }, apiCallErrorHandler);
        }
    }, [token]);

    return (
        <div className={cx("wrapper")}>
            {token.access_token ? <Player /> : <h1>Now you're wrong</h1>}
        </div>
    );
}
