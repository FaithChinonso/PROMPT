import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import React from "react";
import Layout from "./components/Layout";
import HomePage from "./Pages/HomePage";
import SigninPage from "./components/SigninPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout type="all">
        <Switch>
          {/* <Route path="/" element={<SigninPage />} /> */}

          <Route path="home" element={<HomePage />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
