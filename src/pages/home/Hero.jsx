import { FaSearch } from "react-icons/fa";
import bannerImage from "../../assets/banner.png";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="md:pt-44 pt-24 space-y-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-medium  md:w-1/2 mx-auto lg:leading-tight leading-snug px-2">
          Make your interior more minimalistic & modern
        </h1>
        <p className="font-normal text-2xl lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            className="placeholder:text-white w-full md:w-80 focus:outline-none bg-white/25 px-6 py-2 rounded-full border border-gray-300"
            type="text"
            placeholder="Search furniture"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary rounded-full w-25 h-25 p-2 ">
            <FaSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
