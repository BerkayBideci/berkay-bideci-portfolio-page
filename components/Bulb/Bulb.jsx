import Image from "next/image";

const Bulb = () => {
    return <div className="absolute -left-36 -bottom-12 rotate-12 dark:mix-blend-color-dodge mix-blend-exclusion saturate-50 contrast-150 dark:filter-none dark:animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
        <Image
            src="/bulb.png"
            width={260}
            height={200}
            className="w-full h-full"
            alt="" />
    </div>;
};

export default Bulb;
