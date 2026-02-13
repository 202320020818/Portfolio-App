import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Social from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full overflow-x-hidden overflow-y-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-4 xl:pb-24">
          {/* Left - Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Eshan Harshana</span>
            </h1>
            <p className="max-w-sm md:max-w-md lg:max-w-lgtext-white mt-6">
              I design elegant digital experiences with expertise in a wide
              range of programming languages and technologies.
            </p>
            {/* Button and socials*/}
            <div className="mt-5 flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2 text-sm"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent  text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Right - Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
