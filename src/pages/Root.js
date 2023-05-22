import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
