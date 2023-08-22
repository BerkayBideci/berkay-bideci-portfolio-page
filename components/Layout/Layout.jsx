import { Sora } from "next/font/google";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import TopLeftImg from "../TopLeftImg/TopLeftImg";
import React from "react";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
    return (
        <div
            className={`${sora.variable} font-sora relative page bg-site text-white bg-cover bg-no-repeat`}
        >
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;
