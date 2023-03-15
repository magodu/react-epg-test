import { Route, Routes, Navigate } from 'react-router-dom';

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

export default AppRoutes;
