import config from 'src/config';

// Pages
import Home from '~/pages/Home/';
import Profile from 'src/pages/Profile';
import Playlist from 'src/pages/Playlist';
import Search from 'src/pages/Search';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.profile, component: Profile },
    { path: config.routes.playlist, component: Playlist },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
