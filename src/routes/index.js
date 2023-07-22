import LoginLayout from '~/layouts/LoginLayout/LoginLayout';
// Pages
import Home from '~/pages/Home/';
import Profile from '~/pages/Profile';
import Playlist from '~/pages/Playlist';
import Search from '~/pages/Search';
import LogIn from '~/pages/LogIn';
import Signup from '~/pages/Signup';

const routes = {
    home: '/',
    search: '/search',
    user: '/user/:userId',
    playlist: '/playlist/:playlistId',
    login: '/login',
    signup: '/signup'
}

// Public routes
const publicRoutes = [
    { path: routes.home, component: Home},
    { path: routes.profile, component: Profile },
    { path: routes.playlist, component: Playlist },
    { path: routes.search, component: Search },
    { path: routes.login, component: LogIn, layout: LoginLayout},
    { path: routes.signup, component: Signup, layout: null}
];

const privateRoutes = [];

export { routes, publicRoutes, privateRoutes };
