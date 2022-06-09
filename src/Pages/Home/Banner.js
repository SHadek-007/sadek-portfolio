import React from "react";
import TypewriterComponent from "typewriter-effect";

import mypng from "../../assets/img/my-portfolio.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-accent h-[650px] md:h-[550px] px-5 md:px-28 gap-y-10">
      <div className="flex justify-start items-center">
        <div className="f-style">
            <h4 className="text-2xl font-bold">Hi, I am</h4>
            <h1 className="my-4 text-3xl md:text-6xl font-bold text-secondary">SADEK HOSSAIN</h1>
            <p className="mb-10 text-3xl md:text-5xl font-semibold">
              <TypewriterComponent
              options={{
                strings:  ['I am a Web Developer', 'I am a Web Designer', 'I am a Programmer'],
                autoStart: true,
                loop: true,
              }}
                />
              </p>
            <button className="btn btn-primary mr-5 text-white">Hire Me</button>
            <button className="btn btn-primary btn-outline ">Download Resume</button>
        </div>
      </div>
      <div className="flex justify-end items-center">
      <img
            src={mypng}
            className="w-96"
            alt=""
          />
      </div>
    </div>
  );
};

export default Banner;
