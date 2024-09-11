import React from 'react';
import ReactDOM from 'react-dom/client';

import { getRoutes } from './routes.tsx';

import './index.css';
import { RouterProvider } from 'react-router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={getRoutes()} />
    </React.StrictMode>,
);
