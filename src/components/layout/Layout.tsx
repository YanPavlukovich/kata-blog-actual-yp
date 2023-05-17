import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import { LayoutStyle } from "./Layout.style";

export const Layout = () => {
  return (
    <>
      <Header />
      <LayoutStyle>
        <Outlet />
      </LayoutStyle>
    </>
  );
};
