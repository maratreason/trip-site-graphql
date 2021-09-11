import React from "react";
import {GlobalStyle} from "../styles/globals";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
