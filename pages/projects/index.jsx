import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import Bulb from "../../components/Bulb/Bulb";
import Circles from "../../components/Circles/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className="min-h-screen dark:bg-primary/30 flex items-center justify-center bg-gradient-to-r dark:bg-none from-primaryLight via-primaryLight/60 to-primaryLight/10 bg-primaryLight/60 overflow-y-auto overflow-x-hidden xl:overflow-hidden">
      <Circles />
      <div className="container mx-auto max-h-[calc(100vh-14rem)] sm:max-h-none overflow-y-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              key="projects-header"
              className="h2 lg:text-center xl:text-start"
            >
              My projects&nbsp;
              <span className="dark:text-accent text-accentLight">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              key="projects-paragraph"
              className="mb-0 max-w-xl xl:max-w-[400px] mx-auto text-center xl:mx-0 xl:text-justify text-sm lg:text-base"
            >
              Dive into a collection of my work, where each project reflects my
              journey in Front-End Web Development. From intricate designs
              enriched by subtle nuances to dynamic web interactions driven by
              user-focused principles, each one showcases the consistency,
              precision, functionality, and aesthetics I prioritize in my work.
              Behind each project lies a story of innovation, problem-solving,
              and a relentless pursuit of excellence.
            </motion.p>
          </div>
          <div
            className="xl:max-w-[65%]"
          >
            <ProjectSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Projects;
