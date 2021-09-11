import React from "react";
import {GlobalStyle} from "../styles/globals";
import Footer from "./Footer";
import Heading from "./Heading";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Heading />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
