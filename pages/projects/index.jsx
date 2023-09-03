import ProjectSlider from "../../components/ProjectSlider/ProjectSlider"
import Bulb from "../../components/Bulb/Bulb"
import Circles from "../../components/Circles/Circles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Projects = () => {
    return (
        <div className="h-full bg-primaryLight/60 dark:bg-primary/30 py-36 flex sm:items-center justify-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h2
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="h2">
                            My projects&nbsp;
                            <span className="dark:text-accent text-accentLight">
                                .
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="mb-0 max-w-[400px] mx-auto lg:mx-0 xl:text-justify text-sm sm:text-base">
                            Dive into a collection of my work, where each project reflects my journey in Front-End Web Development. From intricate designs enriched by subtle nuances to dynamic web interactions driven by user-focused principles, each one showcases the consistency and precision I prioritize in my work. They stand as testaments to my dedication to both functionality and aesthetics. Behind each project lies a story of innovation, problem-solving, and a relentless pursuit of excellence.
                        </motion.p>
                    </div>
                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="xl:max-w-[65%]">
                        <ProjectSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    )
};

export default Projects;
