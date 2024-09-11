import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import App from './App';
import { ErrorPage } from './pages/ErrorPage';

export const getRoutes = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: 'contact',
                    element: <Contact />,
                },
            ],
        },
    ]);
};
