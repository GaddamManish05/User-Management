import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>

      <main className="flex-grow">
        <div>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default RootLayout;