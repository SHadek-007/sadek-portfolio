import React from "react";
import TypewriterComponent from "typewriter-effect";
import mypng from "../../assets/img/my-portfolio.png";

const Banner = () => {

  return (
    <div>
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-accent h-[650px] md:h-[550px] px-5 md:px-28 gap-y-10">
      <div className="flex justify-start items-center">
        <div className="f-style" >
            <h4 className="text-2xl font-bold"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            >Hi, I am</h4>
            <h1 className="my-4 text-3xl md:text-6xl font-bold text-secondary"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            >SADEK HOSSAIN</h1>
            <p className="mb-10 text-3xl md:text-5xl font-semibold">
              <TypewriterComponent
              options={{
                strings:  ['I am a Web Developer', 'I am a Web Designer', 'I am a Programmer'],
                autoStart: true,
                loop: true,
              }}
                />
              </p>
            <button className="btn btn-primary mr-5 text-white"
            data-aos="fade-up-right"
            data-aos-delay="600"
            data-aos-duration="3000"
            ><a href="#contact">Hire Me</a></button>
            <button className="btn btn-primary btn-outline "
            data-aos="fade-up-right"
            data-aos-delay="600"
            data-aos-duration="3000"
            ><a href="https://drive.google.com/file/d/16C6ifnOB1dUCXscJlnhY5YhNnK7Q6nt-/view" target={'_blank'}>Download Resume</a></button>
        </div>
      </div>
      <div className="flex justify-end items-center"
      data-aos="fade-left"
      data-aos-duration="2000"
      >
      <img
            src={mypng}
            className="w-96"
            alt=""
          />
      </div>
    </div>
    </div>
  );
};

export default Banner;
