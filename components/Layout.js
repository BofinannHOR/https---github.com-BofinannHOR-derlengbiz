import React from "react";
import Navbar from "./NavBar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Head>
        <title>ដើរលេង - ទំព័រដើម</title>
      </Head>
      <Navbar />
      <div class="relative">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
