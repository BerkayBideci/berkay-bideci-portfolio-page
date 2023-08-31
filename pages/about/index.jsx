import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiFramer,
    SiRedux,
    SiFirebase
} from "react-icons/si";
import { FaLightbulb, FaSearch, FaUsers, FaTasks, FaSyncAlt } from 'react-icons/fa';
import { BsDownload } from "react-icons/bs"
import Avatar from "../../components/Avatar/Avatar"
import Circles from "../../components/Circles/Circles"
import { useState } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import CountUp from "react-countup";

const aboutData = [
    {
        title: 'Resume',
        info: [
            {
                title: "",
                cv: {}
            }
        ],
    },
    {
        title: 'skills',
        info: [
            {
                title: 'Technical Skills',
                technologies: [
                    {
                        name: "HTML",
                        icon: <SiHtml5 />,
                    },
                    {
                        name: "CSS",
                        icon: <SiCss3 />,
                    },
                    {
                        name: "JavaScript",
                        icon: <SiJavascript />,
                    },
                    {
                        name: "React.js",
                        icon: <SiReact />,
                    },
                    {
                        name: "Next.js",
                        icon: <SiNextdotjs />,
                    },
                    {
                        name: "Tailwind",
                        icon: <SiTailwindcss />,
                    },
                    {
                        name: "Bootstrap",
                        icon: <SiBootstrap />,
                    },
                    {
                        name: "Framer",
                        icon: <SiFramer />,
                    },
                    {
                        name: "Redux",
                        icon: <SiRedux />,
                    },
                    {
                        name: "Firebase",
                        icon: <SiFirebase />
                    },
                ],
            },
            {
                title: 'Soft Skills',
                notions: [
                    {
                        name: "Creativity",
                        icon: <FaLightbulb />,
                    },
                    {
                        name: "Detail-oriented",
                        icon: <FaSearch />,
                    },
                    {
                        name: "Collaboration",
                        icon: <FaUsers />,
                    },
                    {
                        name: "Multi-tasking",
                        icon: <FaTasks />,
                    },
                    {
                        name: "Adaptability",
                        icon: <FaSyncAlt />,
                    }
                ]
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
                title: 'Front-End Web Development Bootcamp - Re:Coded',
                stage: '2023',
            },
            {
                title: 'Russian Language and Literature - Ankara University',
                stage: '2021',
            },
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
                        className="hidden md:flex md:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-8">
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
                            if (item.title !== "Resume") {
                                return (
                                    <div
                                        key={itemIndex}
                                        className={`${index === itemIndex && "dark:text-accent text-accentLight after:w-[100%] after:bg-accentLight dark:after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hidden xl:flex`}
                                        onClick={() => setIndex(itemIndex)}>
                                        {item.title}
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        key={itemIndex}
                                        className={`${index === itemIndex && "dark:text-accent text-accentLight after:w-[100%] after:bg-accentLight dark:after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                        onClick={() => setIndex(itemIndex)}>
                                        {item.title}
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, itemIndex) => {
                            if (item.title === "") {
                                return (
                                    <a key={itemIndex} href="Berkay_Bideci_CV.pdf" download="Berkay_Bideci_CV.pdf" target="_blank" className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group">
                                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                            Download Resume
                                        </span>
                                        <BsDownload className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                                    </a>
                                )
                            } else {
                                return (
                                    <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center justify-center text-black/60 dark:text-white/60">
                                        <div
                                            className="font-light mb-2 md:mb-0 whitespace-nowrap">
                                            {item.title}
                                        </div>
                                        <div className="hidden md:flex">-</div>
                                        <div>{item.stage}</div>
                                        <div className="flex flex-wrap gap-4 max-w-xs">
                                            {item.technologies?.map((tech, itemIndex) => {
                                                return (
                                                    <div
                                                        key={itemIndex}
                                                        className="text-black dark:text-white flex flex-col justify-center items-center w-16">
                                                        <div className="text-2xl mb-1 hover:text-accentLight dark:hover:text-accent">{tech.icon}</div>
                                                        <div className="text-sm">{tech.name}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="flex flex-wrap gap-y-4 gap-x-2 max-w-md">
                                            {item.notions?.map((notion, itemIndex) => {
                                                return (
                                                    <div
                                                        key={itemIndex}
                                                        className="text-black dark:text-white flex flex-col justify-center items-center w-[7rem]">
                                                        <div className="text-2xl mb-1 hover:text-accentLight dark:hover:text-accent">{notion.icon}</div>
                                                        <div className="text-sm">{notion.name}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default About;
