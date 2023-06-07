import config from '~/config';
import LoginLayout from '~/layouts/LoginLayout/LoginLayout';
// Pages
import Home from '~/pages/Home/';
import Profile from '~/pages/Profile';
import Playlist from '~/pages/Playlist';
import Search from '~/pages/Search';
import LogIn from '~/pages/LogIn';
import Signup from '~/pages/Signup';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.profile, component: Profile },
    { path: config.routes.playlist, component: Playlist },
    { path: config.routes.search, component: Search },
    { path: config.routes.login, component: LogIn, layout: LoginLayout},
    { path: config.routes.signup, component: Signup, layout: null}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
