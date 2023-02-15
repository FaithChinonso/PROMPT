import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import React from "react";
import Layout from "./components/Layout";
import HomePage from "./Pages/HomePage";
import SigninPage from "./Pages/SigninPage";
import AppPage from "./Pages/AppPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/app" element={<AppPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
