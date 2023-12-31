import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        extend: {
            colors: {
                primary: "#131424",
                secondary: "#393A47",
                accent: "#F13024",
                primaryLight: "#838EAF",
                secondaryLight: "#AAB4C2",
                accentLight: "#CDDC39",
            },
            backgroundImage: {
                explosion: 'url("/bg-explosion.png")',
                circles: 'url("/bg-circles.png")',
                circleStar: 'url("/circle-star.svg")',
                circleStarLight: 'url("/circle-star-light.svg")',
                site: 'url("/site-bg.svg")',
                siteLight: 'url("/site-bg-light.svg")',
            },
            animation: {
                "spin-slow": "spin 10s linear infinite",
            },
            fontFamily: {
                poppins: [`var(--font-poppins)`, "sans-serif"],
                sora: [`var(--font-sora)`, "sans-serif"],
            },
        },
    },
    container: {
        padding: {
            DEFAULT: "15px",
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
export default config;
