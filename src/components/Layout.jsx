// components/Layout.jsx
import React from "react";
import Navigation from "./navigation";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navigation />
    <div style={{ marginTop: "4rem" }}>
      <Outlet />
    </div>
  </>
);

export default Layout;
