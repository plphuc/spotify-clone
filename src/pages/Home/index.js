import classNames from "classnames/bind";
import { useContext, useEffect, useRef, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useNavigate } from "react-router-dom";
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
const discover_playlists = ['60Gb1yMwUUov9d9KiOpsYF', '37i9dQZF1EIXuzAJlE00Hk', '37i9dQZEVXcJCNSgkBeUzw', '37i9dQZF1E35jYVAuNA1GJ', '37i9dQZF1EVKuMoAJjoTIw', '37i9dQZF1EVHGWrwldPRtj', '37i9dQZF1E4xDgR4x4yi5w', '37i9dQZF1EVJSvZp5AOML2', '37i9dQZF1E4AfEUiirXPyP']

export default function Home() {
    const navigate = new useNavigate()
    const [state, dispatch] = useStateValue();
    const [token, setToken] = useState({
        access_token: null,
        refresh_token: null
    })
    const refreshTime = useRef(null);
    const spotify = useRef(new SpotifyWebApi());

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
            navigate("/")
            // window.location = ""
        } catch (err) {}
    };

    const refreshToken = async () => {
        // If refresh_token is nulll --> access_token is invalid
        if (!token.refresh_token) {
            token.access_token = null;
        }
        
        const tokenStorage  = JSON.parse(localStorage.getItem("value"))

        // Call new reponse to refresh access_token (change grant_type to refresh_token)
        // Reponse of requesting a refresh access_token does not have refresh_token
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: tokenStorage.refresh_token,
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
            setToken({
                ...token,
                access_token: _token
            })
        }

        // _token = token.access_token
        // after authorized with spotify -> url contains code -> getTokenFromUrl()
        if (!_token) {
            getTokenFromUrl();
            return;
        }

        // Set state when token.access_token is true
        if (_token) {
            spotify.current.setAccessToken(_token);

            dispatch({
                type: "SET_ACCESS_TOKEN",
                access_token: token.access_token,
            });

            dispatch({
                type: "SET_REFRESH_TOKEN",
                refresh_token: token.refresh_token,
            });

            const getData = async () => {
                discover_playlists.forEach(async (playlistId) => {
                    await spotify.current.getPlaylist(playlistId).then(
                        (response) =>
                            dispatch({
                                type: "SET_DISCOVER_WEEKLY",
                                discover_weekly: response,
                            }),
                        apiCallErrorHandler
                    );
                })


                await spotify.current.getMyTopArtists().then(
                    (response) =>
                        dispatch({
                            type: "SET_TOP_ARTISTS",
                            top_artists: response,
                        }),
                    apiCallErrorHandler
                );
    
                await spotify.current.getMe().then((user) => {
                    dispatch({
                        type: "SET_USER",
                        user,
                    });
                }, apiCallErrorHandler);
    
                await spotify.current.getUserPlaylists().then((playlists) => { 
                    dispatch({
                        type: "SET_PLAYLISTS",
                        playlists,
                    });
                }, apiCallErrorHandler);
            }
            getData()
        }
    }, [token]);

    return (
        <div className={cx("wrapper")}>
            {/* Must check all state to only trigger when all state is changed
             (if use only state.user/.../ the others state may have not been get)
            --> when all state was stored Player will be called */}
            {state.user && state.playlists 
            && state.discover_weekly && state.top_artists
            ? <Player/> : <h1>Now you're wrong</h1>}
        </div>
    );
}
