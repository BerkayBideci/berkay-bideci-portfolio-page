import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";

const ProjectsBtn = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div className="mx-auto xl:mx-0 z-10">
            <Link
                href="/projects"
                className="relative w-[185px] h-[185px] flex justify-center items-center dark:bg-circleStar bg-circleStarLight bg-cover bg-center bg-no-repeat group mb-5 sm:mb-0"
            >
                <Image
                    src={themeContext.isDarkTheme ? "/rounded-text.png" : "/rounded-text-black.png"}
                    width={141}
                    height={148}
                    alt=""
                    className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
                />
                <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
        </div>
    );
};

export default ProjectsBtn;
