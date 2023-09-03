
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

const projectSlides = {
    slides: [
        {
            images: [
                {
                    title: "Givingly",
                    path: "/thumb1.jpg",
                    demo: "https://capstone-team-3-final.vercel.app/en",
                    code: "https://github.com/202303-PRM-TR-FEW/capstone-template-team-3",
                },
                {
                    title: "I Like To Movie Movie",
                    path: "/thumb2.jpg",
                    demo: "https://202303-prm-tr-few.github.io/movie-project-aybike-berkay-medetcan/",
                    code: "https://github.com/BerkayBideci/movie-project",
                },
                {
                    title: "Promptopia",
                    path: "/thumb3.jpg",
                    demo: "https://promptopia-bf9v1fkpa-berkaybideci.vercel.app/",
                    code: "https://github.com/BerkayBideci/promptopia",
                },
                {
                    title: "All Doggs Go To Heaven",
                    path: "/thumb4.jpg",
                    demo: "https://berkaybideci.github.io/fav-artist-landing-page/",
                    code: "https://github.com/BerkayBideci/fav-artist-landing-page",
                },
            ],
        },
        {
            images: [
                {
                    title: "title",
                    path: "/thumb4.jpg",
                },
                {
                    title: "title",
                    path: "/thumb1.jpg",
                },
                {
                    title: "title",
                    path: "/thumb2.jpg",
                },
                {
                    title: "title",
                    path: "/thumb3.jpg",
                },
            ],
        },
    ],
};

const ProjectSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                }
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
        >
            {projectSlides.slides.map((slideGroup, groupIndex) =>
                slideGroup.images.map((image, imageIndex) => (
                    <SwiperSlide key={`${groupIndex}-${imageIndex}`}>
                        <div className="cursor-pointer">
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <div className="flex items-center justify-center relative overflow-hidden group">
                                    <Image
                                        src={image.path}
                                        width={500}
                                        height={300}
                                        alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#6A7A9A] to-[#2F3A5A] dark:via-[#e838cc] dark:to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                        <div className="text-lg translate-y-[700%] group-hover:translate-y-0 transition-all duration-300 delay-500 flex justify-center items-center tracking-[0.2em] mb-1">
                                            <h3>{image.title}</h3>
                                        </div>
                                        <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                                            <div className="delay-100">
                                                <a href={image.demo} target="_blank" className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group">
                                                    <span>
                                                        DEMO
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                <a href={image.code} target="_blank" className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group">
                                                    <span>
                                                        CODE
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    )
};

export default ProjectSlider;

