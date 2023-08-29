import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Transition from "../components/Transition/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeContextProvider } from "../store/ThemeContext";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <ThemeContextProvider>
            <Layout>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={router.route}
                        className="h-full"
                    >
                        <Transition />
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </ThemeContextProvider>
    );
}
