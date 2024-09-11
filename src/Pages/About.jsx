import React from 'react';
import data from '../Storage/data';

const About = () => {
  return (
    <div className=' max-h-auto w-[100vw] overflow-y-hidden flex flex-col lg:flex-row items-center justify-center p-4'>
      {/* Left side content */}
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left lg:mr-10'>
        <div className='flex items-center justify-center lg:justify-start'>
          <h1 className="m-6 group relative w-max font-bold text-3xl">
            <span className='cursor-pointer'>About</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-black group-hover:w-3/6"></span>
          </h1>
          <img className='h-[50px] w-[50px]' src={data.wave} alt="Wave Icon" />
        </div>

        <div className='max-w-[500px] mt-4'>
          <p className='font-light text-base'>
            Hello! I'm Aryan Sharma, a passionate software developer with a deep love for software engineering and a geeky enthusiasm for continuous learning. As a full-stack developer, I have a strong grasp of both front-end and back-end technologies, with a keen eye for UI and UX design. I'm dedicated to creating seamless and engaging user experiences.
            Currently, I'm on the lookout for internship and full-time opportunities where I can contribute my skills, learn from industry professionals, and further refine my expertise. Let's connect and explore how we can work together!
          </p>
        </div>
      </div>

      {/* Right side image */}
      <div className=' max-h-max w-[300px] mt-8 lg:mt-0 lg:ml-10 '>
        <img src={data.berser} alt="Profile Image" className="rounded-lg "/>
      </div>
    </div>
  );
};

export default About;

