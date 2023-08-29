import Image from "next/image";

const TopLeftImg = () => {
    return (
        <div className="absolute left-0 top-0 z-0 w-[200px] xl:w-[400px] mix-blend-lighten dark:mix-blend-color-dodge animate-pulse opacity-40">
            <Image
                src="/top-left-img.png"
                width={400}
                height={400}
                alt="Pinkish red splash art on the top left corner of the screen."
            />
        </div>
    );
};

export default TopLeftImg;
