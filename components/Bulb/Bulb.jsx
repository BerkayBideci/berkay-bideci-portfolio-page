import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";

const Bulb = () => {
    const themeContext = useContext(ThemeContext);
    return <div className="absolute -left-36 -bottom-12 rotate-12 dark:mix-blend-color-dodge mix-blend-soft-light dark:animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
        {themeContext.isDarkTheme ? <Image
            src="/bulb.png"
            width={260}
            height={200}
            className="w-full h-full"
            alt="An illustration of a light bulb with a brain inside." /> : <Image
            src="/bulb-light.png"
            width={260}
            height={200}
            className="w-full h-full"
            alt="An illustration of a light bulb with a brain inside." />}
    </div>;
};

export default Bulb;
