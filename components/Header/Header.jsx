import Image from "next/image";
import Link from "next/link";
import Socials from "../Socials/Socials"
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";
import { MoonIcon, SunIcon } from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {

    const themeContext = useContext(ThemeContext);

    function toggleThemeHandler() {
        themeContext.toggleThemeHandler();
    }

    return (
        <header className="absolute z-30 w-full flex items-center md:px-[148px] xl:px-0 xl:h-[90px] justify-center min-w-max">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
                    <Link href="/">
                        <Image
                            src={themeContext.isDarkTheme ? "/logo-dark.svg" : "/logo.svg"}
                            width={220}
                            height={48}
                            alt=""
                            priority={true}
                        />
                    </Link>
                    <div className="flex gap-x-5">
                        <Socials />
                        <button onClick={toggleThemeHandler}>
                            {themeContext.isDarkTheme
                                ? <SunIcon className={"dark:hover:text-accent hover:text-accentLight"} />
                                : <MoonIcon className={"dark:hover:text-accent hover:text-accentLight"} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
