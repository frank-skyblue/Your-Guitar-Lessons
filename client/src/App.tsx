import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { initializeAuthAsync } from "./store/authThunks";
import { AppDispatch, store } from "./store/store";
import ErrorPage from "./errorPage";
import DynamicRoute from "./routes/layout/DynamicRoute";
import RoleRoute from "./routes/layout/RoleRoute";
import RootLayout from "./routes/layout/RootLayout";
import HomeLayout from "./routes/layout/HomeLayout";
import AuthLayout from "./routes/layout/AuthLayout";
import Home from "./routes/home";
import Calendar from "./routes/calendar";
import About from "./routes/about";
import Profile from "./routes/profile";
import Login from "./routes/auth/login";
import Signup from "./routes/auth/signup";
import AdminHome from "./routes/adminHome";
import AdminCalendar from "./routes/adminCalendar";
import AdminProfile from "./routes/adminProfile";
import AuthRoute from "./routes/layout/AuthRoute";
import Landing from "./routes/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: (
              <DynamicRoute
                authenticationPage={false}
                landingPage={false}
                element={<RoleRoute element={<Home />} admin={<AdminHome />} />}
              />
            ),
          },
          {
            path: "calendar",
            element: (
              <DynamicRoute
                authenticationPage={false}
                landingPage={false}
                element={
                  <RoleRoute element={<Calendar />} admin={<AdminCalendar />} />
                }
              />
            ),
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: (
              <DynamicRoute
                authenticationPage={true}
                landingPage={false}
                element={<Login />}
              />
            ),
          },
          {
            path: "signup",
            element: (
              <DynamicRoute
                authenticationPage={true}
                landingPage={false}
                element={<Signup />}
              />
            ),
          },
        ],
      },
      {
        path: "about",
        element: (
          <DynamicRoute
            authenticationPage={false}
            landingPage={true}
            element={<AuthRoute element={<Landing />} auth={<About />} />}
          />
        ),
      },
      {
        path: "profile",
        element: (
          <DynamicRoute
            authenticationPage={false}
            landingPage={false}
            element={
              <RoleRoute element={<Profile />} admin={<AdminProfile />} />
            }
          />
        ),
      },
    ],
  },
]);

const AppContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [initStarted, setInitStarted] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      setInitStarted(true);
      await dispatch(initializeAuthAsync());
    };

    initialize();
  }, [dispatch]);

  // Show loading until initialization is complete
  if (!initStarted) {
    return (
      <div className="loading-container">
        <div>Initializing...</div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
