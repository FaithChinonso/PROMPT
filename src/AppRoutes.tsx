import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import React from "react";
import Layout from "./components/Layout";
import HomePage from "./Pages/HomePage";
import SigninPage from "./Pages/SigninPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<SigninPage />} />
        <Route path="home" element={<HomePage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
