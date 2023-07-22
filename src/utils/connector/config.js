import queryString from "query-string";

const authEndpoint = "https://accounts.spotify.com/authorize?";
export const clientId = "af6d252042964a2383bd5449bb5f006f";
export const clientSecret = "06bbee70cf5d4ea9a0a29a24f732bcbb";
export const redirectUri = "http://localhost:3000/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export function paramsToObject(entries) {
    const result = {};
    for (const [key, value] of entries) {
        // each 'entry' is a [key, value] tupple
        result[key] = value;
    }
    return result;
}

// export const loginUri = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
export const loginUri =
    authEndpoint +
    queryString.stringify({
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: scopes.join(" "),
        response_type: "code",
        show_dialog: true,
    });
