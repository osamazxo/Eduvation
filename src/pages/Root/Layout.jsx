import React from "react";
import { Outlet } from "react-router-dom";

import { NavbarFull } from "shared/ui/Navbar/index.jsx";
export default function Layout() {
  return (
    <>
      <NavbarFull />
      <div>
        <Outlet />
      </div>
    </>
  );
}
