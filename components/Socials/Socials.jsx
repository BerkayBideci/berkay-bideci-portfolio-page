import Link from "next/link";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri"

const Socials = () => {
    return <div className="flex items-center gap-x-5 text-lg xl:text-2xl">
        <Link href="https://github.com/BerkayBideci" target='_blank' className="hover:text-accent transition-all duration-300">
            <RiGithubFill />
        </Link>
        <Link href="https://www.linkedin.com/in/berkay-bideci-8902921b1/" target='_blank' className="hover:text-accent transition-all duration-300">
            <RiLinkedinFill />
        </Link>
    </div>;
};

export default Socials;
