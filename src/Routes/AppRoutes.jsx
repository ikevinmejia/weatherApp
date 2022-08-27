import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "../Components/CreateAccount";
import Home from "../Components/Home";
import Login from "../Components/Login";
import NavBar from "../Components/NavBar";
import Profile from "../Components/Profile";
import { ContextProvider } from "../context/ContextProvider";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const AppRoutes = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        // console.log(user);
        // Posibilidad de recuperar la info luego de que se recargue la web
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, [auth]);

  return (
    <BrowserRouter>
    <ContextProvider>

      <Routes>
        // Public Routes
        <Route
          path="/"
          element={
            <PublicRouter isAutentication={auth}>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/createAccount"
          element={
            <PublicRouter isAutentication={auth}>
              <CreateAccount />
            </PublicRouter>
          }
        />

        // Private Routes

        <Route
          path="/Home"
          element={
            <PrivateRouter isAutentication={auth}>
              <NavBar />
              <Home />
            </PrivateRouter>
          }
        />
        <Route
          path="/Profile"
          element={
            <PrivateRouter isAutentication={auth}>
              <NavBar />
              <Profile />
            </PrivateRouter>
          }
        />
      </Routes>
    </ContextProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
