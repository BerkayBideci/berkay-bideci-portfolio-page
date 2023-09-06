import ParticlesContainer from "../components/ParticlesContainer/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn/ProjectsBtn";
import Avatar from "../components/Avatar/Avatar";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Home() {
    return (
        <div className="bg-primaryLight xl:bg-primaryLight/10 dark:bg-primary/60 h-full">
            <div className="w-full h-full dark:bg-gradient-to-r dark:from-primary/10 dark:via-black/30 dark:to-black/10 xl:bg-gradient-to-r from-primaryLight from-[37%] via-primaryLight/60 to-primaryLight/10">
                <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h1 xl:max-w-xl z-10"
                    >
                        Transforming Vision <br /> Into{" "}
                        <span className=" text-accentLight dark:text-accent">Digital De Facto</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-sm md:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-justify text-sm md:text-base z-10"
                    >
                        Hello, I&apos;m <strong className="font-bold">Berkay</strong>, a <strong className="font-bold">Front-End Web Developer</strong> with a background in game design, translation, and editing. Proficient in a diverse range of technologies, including <strong className="font-bold">HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React.js, Next.js, and Redux Toolkit</strong>. Possess strong attention to detail, and a dedication to providing high-quality web development solutions.
                    </motion.p>
                    <div className="flex justify-center xl:hidden relative">
                        <ProjectsBtn />
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden xl:flex"
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-exclusion saturate-[.30] contrast-200 hue-rotate-0 dark:filter-none dark:mix-blend-color-dodge translate-z-0 opacity-40 animate-pulse"></div>
                <ParticlesContainer />
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 1, ease: easeInOut }}
                    className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-6 lg:right-[8%]"
                >
                    <Avatar />
                </motion.div>
            </div>
        </div>
    );
}
