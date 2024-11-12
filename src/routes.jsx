import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

// Lazy load components
const Home = lazy(() => import('./pages/home'));
// const Contact = lazy(() => import('./pages/contact'));
// const NotFound = lazy(() => import('./pages/notFound'));
// const ServicesPage = lazy(() => import('./pages/services'));
// const AboutPage = lazy(() => import('./pages/about'));
// const WorkPage = lazy(() => import('./pages/work'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*  <Route path="/Contact-Us" element={<Contact />} />
                <Route path="/About-Us" element={<AboutPage />} />
                <Route path="/Services" element={<ServicesPage />} />
                <Route path="/Our-Work" element={<WorkPage />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
