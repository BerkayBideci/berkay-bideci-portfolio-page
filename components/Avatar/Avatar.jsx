import Image from "next/image";

const Avatar = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none mix-blend-luminosity dark:mix-blend-normal">
            <Image
                src="/avatar.png"
                width={737}
                height={678}
                alt="A man portrayed in a synthwave-style illustration."
                className="translate-z-0 w-full h-full"
            />
        </div>
    );
};

export default Avatar;
