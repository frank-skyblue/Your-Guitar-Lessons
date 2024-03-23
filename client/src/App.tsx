import React, { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import DynamicRoute from './routes/layout/DynamicRoute';
import RoleRoute from './routes/layout/RoleRoute';
import RootLayout from "./routes/layout/RootLayout";
import HomeLayout from './routes/layout/HomeLayout';
import AuthLayout from './routes/layout/AuthLayout';
import Home from './routes/home';
import Calendar from './routes/calendar';
import About from './routes/about';
import Profile from './routes/profile';
import Login from './routes/auth/login';
import Signup from './routes/auth/signup';
import AdminHome from './routes/adminHome';
import AdminCalendar from './routes/adminCalendar';
import AdminProfile from './routes/adminProfile';

// TODO: appending additional child routes will cause the nav highlight to not work
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <HomeLayout />,
                children: [
                    {
                        index: true,
                        element: <DynamicRoute
                            authenticationPage={false}
                            landingPage={false}
                            element={<RoleRoute element={<Home />} admin={<AdminHome />} />} />,
                    },
                    {
                        path: 'calendar',
                        element: <DynamicRoute
                            authenticationPage={false}
                            landingPage={false}
                            element={<RoleRoute element={<Calendar />} admin={<AdminCalendar />} />} />,
                    }
                ]
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <DynamicRoute authenticationPage={true} landingPage={false} element={<Login />} />,
                    },
                    {
                        path: 'signup',
                        element: <DynamicRoute authenticationPage={true} landingPage={false} element={<Signup />} />,
                    }
                ]
            },
            {
                path: 'about',
                element: <DynamicRoute authenticationPage={false} landingPage={true} element={<About />} />,
            },
            {
                path: 'profile',
                element: <DynamicRoute
                    authenticationPage={false}
                    landingPage={false}
                    element={<RoleRoute element={<Profile />} admin={<AdminProfile />} />} />,
            },
        ]
    },
]);

function App() {
    /* Test backend connection
    console.log(url)
    const [message , setMessage] = React.useState<string>('');
    useEffect(() => {
        axios.get(url + '/api/hello')
            .then((res) => {
                console.log(res.data)
                setMessage(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    */
    return (
        <RouterProvider router={router} />
    );
}

export default App;
