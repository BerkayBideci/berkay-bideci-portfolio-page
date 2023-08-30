import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiFramer,
    SiRedux,
    SiFirebase
} from "react-icons/si";
import Avatar from "../../components/Avatar/Avatar"
import Circles from "../../components/Circles/Circles"
import { useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import CountUp from "react-countup";

const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Technical Skills',
                icons: [
                    <SiHtml5 />,
                    <SiCss3 />,
                    <SiJavascript />,
                    <SiReact />,
                    <SiNextdotjs />,
                    <SiFramer />,
                    <SiRedux />,
                    <SiFirebase />
                ],
            },
            {
                title: 'Soft Skills',
                icons: []
            }
            // {
            //     title: 'UI/UX Design',
            //     icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
            // },
        ],
    },
    // {
    //     title: 'awards',
    //     info: [
    //         {
    //             title: 'Webby Awards - Honoree',
    //             stage: '2011 - 2012',
    //         },
    //         {
    //             title: 'Adobe Design Achievement Awards - Finalist',
    //             stage: '2009 - 2010',
    //         },
    //     ],
    // },
    // {
    //     title: 'experience',
    //     info: [
    //         {
    //             title: 'UX/UI Designer - XYZ Company',
    //             stage: '2012 - 2023',
    //         },
    //         {
    //             title: 'Web Developer - ABC Agency',
    //             stage: '2010 - 2012',
    //         },
    //         {
    //             title: 'Intern - DEF Corporation',
    //             stage: '2008 - 2010',
    //         },
    //     ],
    // },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ],
    },
    {
        title: 'Resume',
        info: [
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="h-full bg-primaryLight/60 dark:bg-primary/30 py-32 text-center xl:text-left">
            <Circles />
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex absolute bottom-0 -left-[370px]">
                <Avatar />
            </motion.div>
            <div className="container mx-auto h-full flex flex-col items-center justify-start xl:flex-row gap-x-6">
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="h2">
                        Impressive designs are <br /> born from unique <span className="text-accentLight dark:text-accent">stories</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("right", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-sm md:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:text-justify text-sm md:text-base">
                        <strong className="font-bold">My voyage to the tech industry is rather unconventional.</strong> After earning a degree from the Department of Russian Language and Literature at Ankara University and gaining experience as a translator on various projects, both volunteer and professional, <strong className="font-bold">I reached a pivotal crossroads in my life.</strong> Fueled by my dreams, I co-founded a startup with my friends, focused on tabletop role-playing games. But it was the crafting of our official website that unveiled a new passion lying dormant within me. <strong className="font-bold">It was a revelation — a beacon guiding me to the vibrant shores of Front-End Web Development,</strong> where every line of code weaves a story just waiting to be told.
                    </motion.p>
                    <motion.div
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden md:flex md:max-w-xl mx-auto xl:mx-0 mb-8">
                        <div className="flex justify-center items-center flex-1 gap-x-6">
                            <div className="flex-auto w-40 border-y border-l p-3 border-black/60 dark:border-white/10 rounded-s-xl">
                                <div className="text-2xl xl:text-4xl font-extrabold dark:text-accent text-accentLight mb-2 text-start">
                                    <CountUp start={0} end={2000} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-start">
                                    Hours of <br />self study
                                </div>
                            </div>
                            <div className="flex-auto w-40 border p-3 border-black/60 dark:border-white/10 rounded-xl">
                                <div className="text-2xl xl:text-4xl font-extrabold dark:text-accent text-accentLight mb-2 text-center">
                                    <CountUp start={0} end={5} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-center">
                                    Months of <br />experience
                                </div>
                            </div>
                            <div className="flex-auto w-40 border-y border-r p-3 border-black/60 dark:border-white/10 rounded-e-xl">
                                <div className="text-2xl xl:text-4xl font-extrabold dark:text-accent text-accentLight mb-2 text-end">
                                    <CountUp start={0} end={20} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-end">
                                    Finished <br />projects
                                </div>
                            </div>
                            {/* <div className="relative flex-1">
                                <div className="text-2xl xl:text-4xl font-extrabold dark:text-accent text-accentLight mb-2">
                                    <CountUp start={0} end={8} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Winning awards
                                </div>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col w-full xl:max-w-[48%] h-[530px]">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && "dark:text-accent text-accentLight after:w-[100%] after:bg-accentLight dark:after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-black/60 dark:text-white/60">
                                    <div
                                        className="font-light mb-2 md:mb-0">
                                        {item.title}
                                    </div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>
                                    <div className="flex gap-x-4">
                                        {item.icons?.map((icon, itemIndex) => {
                                            return (
                                                <div
                                                    key={itemIndex}
                                                    className="text-2xl text-black dark:text-white">
                                                    {icon}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default About;
