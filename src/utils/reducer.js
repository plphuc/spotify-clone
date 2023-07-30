export const initialState = {
    user: null,
    playlists: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            // New discover is an object
            // Discover will be stored as an Array
            if (Array.isArray(state.discover_weekly)) {

                let newDiscover = state.discover_weekly
                for (let playlist of newDiscover) {
                    // Check if playlist is already added 
                    if (playlist.id === action.discover_weekly.id) {
                        return state
                    }
                }

                newDiscover.push(action.discover_weekly)

                return {
                    ...state,
                    discover_weekly: newDiscover
                }
            }
            
            let newDiscover = [action.discover_weekly]
            return {
                ...state,
                discover_weekly: newDiscover
            }
           

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_ACCESS_TOKEN":
            return {
                ...state,
                access_token: action.access_token,
            };

        case "SET_REFRESH_TOKEN":
            return {
                ...state,
                refresh_token: action.refresh_token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;
