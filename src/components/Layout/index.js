import React from "react";
import { BottomBar } from "../BottomBar";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="cont">{children}</main>

      <BottomBar>xd</BottomBar>
    </>
  );
}

export default Layout;
