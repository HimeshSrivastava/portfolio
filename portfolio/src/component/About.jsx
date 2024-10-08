// import { useEffect, useState } from 'react';
import portfoliopic from './assets/portfoliopic.jpg'
const About = () => {
  // const [text, setText] = useState("");
  // const fullText = "HELLO EVERYONE";

  
  // useEffect(() => {
  //   let index = 0;

  //   const typingEffect = () => {
  //     if (index < fullText.length) {
  //       setText((prev) => prev + fullText.charAt(index));
  //       index++;
  //       setTimeout(typingEffect, 50);
  //     }
  //   };

  //   typingEffect(); 
  // }, []);


  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-28 p-4 md:p-20 pt-0 mb-20 md:mb-0 max-h-max">
      <div className="w-full md:w-1/2 h-auto flex-col gap-6 max-h-max">
        <h1 className="font-extrabold text-3xl text-orange-400 text-center">HELLO EVERYONE</h1>
        <p className="font-semibold text-2xl text-yellow-700 text-center">I’m a passionate full-stack developer with a focus on React, Redux, and C++. I've built full-scale clones of platforms like YouTube and Netflix, enhancing my ability to design scalable, high-performance web apps. I thrive on solving complex challenges, learning new tech, and contributing to teams that drive innovation. Constantly exploring the latest in web development, I'm always seeking ways to push the boundaries of what's possible.</p>
      </div>
      <div className="relative w-96 md:w-1/4 h-96 md:h-80 rounded-full transition-colors duration-500 ease-in-out hover:bg-red-200 flex items-center justify-center">
        <img src={portfoliopic} alt="pic" className="w-full h-full rounded-md md:rounded-full object-cover" />
      </div>

    </div>
  );
};

export default About;
