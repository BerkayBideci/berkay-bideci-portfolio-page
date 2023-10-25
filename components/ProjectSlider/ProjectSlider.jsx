import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiI18Next,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const projectSlides = {
  slides: [
    {
      images: [
        {
          title: "Givingly",
          path: "/Givingly.png",
          demo: "https://capstone-team-3-final.vercel.app/en",
          code: "https://github.com/202303-PRM-TR-FEW/capstone-template-team-3",
          description:
            "Givingly is a robust crowdfunding platform that connects passionate individuals and innovative projects with a community of potential backers.",
          technologies: [
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Firebase",
            "Redux",
            "I18Next",
          ],
        },
        {
          title: "I Like To Movie Movie",
          path: "/ILikeToMovieMovie.png",
          demo: "https://202303-prm-tr-few.github.io/movie-project-aybike-berkay-medetcan/",
          code: "https://github.com/BerkayBideci/movie-project",
          description:
            "I Like To Movie Movie serves as a movie database, where it shows movies, their casts, ratings, trailers, related movies, genres, and additional details of them.",
          technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        },
        {
          title: "3D Customizer",
          path: "/3DCustomizer.png",
          demo: "https://stunning-taiyaki-628a19.netlify.app/",
          code: "https://github.com/BerkayBideci/threejs-practice",
          description:
            "3D Customizer enables users to design t-shirts through real-time texture and logo visualization, ensuring unique creations and an immersive customization journey.",
          technologies: [
            "Vite.js",
            "React.js",
            "Three.js",
            "Framer",
            "Tailwind CSS",
          ],
        },
        {
          title: "All Doggs Go To Heaven",
          path: "/AllDoggsGoToHeaven.png",
          demo: "https://berkaybideci.github.io/fav-artist-landing-page/",
          code: "https://github.com/BerkayBideci/fav-artist-landing-page",
          description:
            "All Doggs Go To Heaven serves as a landing page for my favorite artist, Snoop Doggy Dogg. The page encapsulates the essence of Snoop's unique vibe.",
          technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        },
      ],
    },
    {
      images: [
        {
          title: "Promptopia",
          path: "/Promptopia.png",
          demo: "https://promptopia-bf9v1fkpa-berkaybideci.vercel.app/",
          code: "https://github.com/BerkayBideci/promptopia",
          description:
            "Promptopia is an open-source AI prompting tool for modern world to discover, create, and share creative prompts.",
          technologies: [
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "CSS",
            "MongoDB",
          ],
        },
        {
          title: "Meme Generator",
          path: "/MemeGenerator.png",
          demo: "https://meme-generator-seven-rho.vercel.app/",
          code: "https://github.com/BerkayBideci/meme-generator",
          description:
            "A web-based meme generator that empowers users to sprinkle witty captions onto iconic meme templates and then effortlessly archive them on their devices.",
          technologies: ["Next.js", "React.js", "Tailwind CSS"],
        },
      ],
    },
  ],
};

const ProjectSlider = () => {
  const getTechIcon = (techName) => {
    switch (techName) {
      case "Next.js":
        return <SiNextdotjs />;
      case "Vite.js":
        return <SiVite />;
      case "Three.js":
        return <TbBrandThreejs />;
      case "React.js":
        return <SiReact />;
      case "Tailwind CSS":
        return <SiTailwindcss />;
      case "Firebase":
        return <SiFirebase />;
      case "Redux":
        return <SiRedux />;
      case "I18Next":
        return <SiI18Next />;
      case "HTML":
        return <SiHtml5 />;
      case "CSS":
        return <SiCss3 />;
      case "JavaScript":
        return <SiJavascript />;
      case "Bootstrap":
        return <SiBootstrap />;
      case "Framer":
        return <SiFramer />;
      case "MongoDB":
        return <SiMongodb />;
      case "Git":
        return <SiGit />;
      default:
        return null;
    }
  };

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      slidesPerGroup={1}
      loop
      breakpoints={{
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
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
                  <Image src={image.path} width={500} height={300} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#6A7A9A] to-[#2F3A5A] dark:via-[#e838cc] dark:to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="text-lg translate-y-[700%] group-hover:translate-y-0 transition-all duration-300 delay-500 flex justify-center items-center tracking-[0.2em] mb-1">
                      <h3>{image.title}</h3>
                    </div>
                    <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">
                        <a
                          href={image.demo}
                          target="_blank"
                          className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group"
                        >
                          <span>DEMO</span>
                        </a>
                      </div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <a
                          href={image.code}
                          target="_blank"
                          className="btn rounded-full border border-black/60 dark:border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accentLight dark:hover:border-accent group"
                        >
                          <span>CODE</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center p-4 text-xs xl:text-base">
                {image.description}
              </p>
              <div className="flex justify-center items-center gap-x-4 text-2xl">
                {image.technologies?.map((techName, index) => {
                  const techIcon = getTechIcon(techName);
                  return (
                    <div
                      key={`${image.title}-tech-${index}`}
                      className="hover:text-accentLight dark:hover:text-accent"
                    >
                      {techIcon}
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
        )),
      )}
    </Swiper>
  );
};

export default ProjectSlider;
