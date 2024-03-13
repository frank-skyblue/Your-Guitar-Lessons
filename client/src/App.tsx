import React, {useEffect} from 'react';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Home from './routes/home';
import Calendar from './routes/calendar';
import About from './routes/about';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'calendar',
                element: <Calendar />,
            },
            {
                path: 'about',
                element: <About />,
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
