import AppView from './components/AppView';
import IndexView from './components/IndexView';
import AboutView from './components/AboutView';

export const routes = {
    path: '',
    component: AppView,
    childRoutes: [
        { path: '/', component: IndexView },
        { path: '/about', component: AboutView },
        // TODO: Add routes for creating a party, for voting on a party and for watching the votes

    ],
};
