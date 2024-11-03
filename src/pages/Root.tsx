import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="px-5 min-h-screen">
      <Outlet />
    </main>
  );
};

export default RootLayout;
