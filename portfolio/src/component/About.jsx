import portfoliopic from './assets/portfoliopic.jpg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-20 py-10 md:py-20">
      {/* Profile Image */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
        <img
          src={portfoliopic}
          alt="Portfolio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="font-extrabold text-3xl md:text-4xl text-orange-500 mb-4">
          Hello Everyone!
        </h1>
        <p className="font-medium text-lg md:text-xl text-gray-700 leading-relaxed">
          I’m a passionate full-stack developer specializing in{" "}
          <span className="font-semibold text-orange-600">
            React.js, Redux, and C++
          </span>
          . I have extensive experience building scalable, high-performance web
          applications, including full-stack clones of platforms like YouTube
          and Netflix.
        </p>
        <p className="font-medium text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          I thrive on solving complex challenges, staying updated with the
          latest web technologies, and collaborating with innovative teams. My
          skills include building impactful digital solutions and managing
          projects end-to-end.
        </p>
        <p className="font-medium text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          Selected as an{" "}
          <span className="font-semibold text-orange-600">
            open-source contributor at GSSoC
          </span>{" "}
          and experienced in working with startups like Bedwellin. I bring
          expertise, dedication, and creativity to every project.
        </p>
        <p className="font-medium text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          Let’s collaborate and bring innovative ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
