import React from "react";
import {GlobalStyle} from "../styles/globals";
import Footer from "./Footer";
import Header from "./Header";

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
