import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Spinner from './components/UI/Spinner/Spinner';

const Home = lazy(() => import('./pages/Home/Home'));
const Guide = lazy(() => import('./pages/Guide/Guide'));
const OnDemand = lazy(() => import('./pages/OnDemand/OnDemand'));
const WatchAgain = lazy(() => import('./pages/WatchAgain/WatchAgain'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/guide" />} />
            <Route path="/home" element={<Suspense fallback={<Spinner />}><Home /></Suspense>} />
            <Route path="/on-demand" element={<Suspense fallback={<Spinner />}><OnDemand /></Suspense>}  />
            <Route path="/guide" element={<Suspense fallback={<Spinner />}><Guide /></Suspense>} />
            <Route path="/watch-again" element={<Suspense fallback={<Spinner />}><WatchAgain /></Suspense>} />
            <Route path="/favorites" element={<Suspense fallback={<Spinner />}><Favorites /></Suspense>}  />
        </Routes>
    );
};

export default AppRoutes;


/* import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import OnDemand from './pages/OnDemand/OnDemand';
import Guide from './pages/Guide/Guide';
import WatchAgain from './pages/WatchAgain/WatchAgain';
import Favorites from './pages/Favorites/Favorites';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/guide" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/on-demand" element={<OnDemand />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/watch-again" element={<WatchAgain />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    );
};

export default AppRoutes; */
