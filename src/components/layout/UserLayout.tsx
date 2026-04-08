import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full max-w-full flex flex-col overflow-x-hidden scroll-smooth bg-background">
      <Header />

      <main className="flex-1 w-full max-w-full overflow-x-hidden pt-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;