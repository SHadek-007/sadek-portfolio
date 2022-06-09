import React from "react";
import mypng from "../../assets/img/my-portfolio.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-accent h-[550px] px-5 md:px-28 gap-y-10">
      <div className="flex justify-start items-center">
        <div className="f-style">
            <h4 class="text-2xl font-bold">Hi, I am</h4>
            <h1 class="my-4 text-3xl md:text-6xl font-bold text-secondary">SADEK HOSSAIN</h1>
            <h3 class="mb-10 text-3xl md:text-5xl font-semibold">I am Web Developer</h3>
            <button class="btn btn-primary mr-5 text-white">Hire Me</button>
            <button class="btn btn-primary btn-outline ">Download Resume</button>
        </div>
      </div>
      <div className="flex justify-end items-center">
      <img
            src={mypng}
            class="w-96"
            alt=""
          />
      </div>
    </div>
  );
};

export default Banner;
