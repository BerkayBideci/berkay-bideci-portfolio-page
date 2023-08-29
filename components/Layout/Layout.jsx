import { Sora } from "next/font/google";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import TopLeftImg from "../TopLeftImg/TopLeftImg";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
    return (
        <div
            className={`${sora.variable} font-sora relative page dark:bg-site text-black bg-cover bg-no-repeat bg-siteLight dark:text-white`}
        >
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;
