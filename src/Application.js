import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homelayout from './components/layouts/Homelayout/Homelayout';
import Homepage from './components/pages/Homepage/Homepage';
import ErrorPage from './components/pages/Errors/ErrorPage/ErrorPage';

const Application = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homelayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                }
            ]
        }
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Application