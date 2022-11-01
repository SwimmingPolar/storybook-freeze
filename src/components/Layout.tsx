import React from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default Layout;
