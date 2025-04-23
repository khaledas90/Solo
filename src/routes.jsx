import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

// Lazy load components
const Home = lazy(() => import('./pages/home'));
const SoloRf = lazy(() => import('./pages/soloRf'));


const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solo-rf" element={<SoloRf />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
