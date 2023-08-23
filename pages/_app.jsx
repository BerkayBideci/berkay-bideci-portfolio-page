import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Transition from "../components/Transition/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
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
    );
}
