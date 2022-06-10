import React from 'react';
import developer from '../../assets/img/Developer.png';
import facebook from '../../assets/logo/facebook.png';
import linkedin from '../../assets/logo/linkedin.png';
import github from '../../assets/logo/github.png';
import instagram from '../../assets/logo/instagram.png';
import twitter from '../../assets/logo/twitter.png';

const About = () => {
    return (
        <div id='about' className='mt-20 md:my-18 px-5 md:px-28 z-10'>
            <h2 className='text-4xl text-center font-bold mb-5 f-style '>About <span className='text-secondary'>Me</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-7 items-center text-justify'>
                <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                >
                    <img className='w-85' src={developer} alt="" />
                </div>
                <div className='col-span-2'>
                    <p>Hello! I am Sadek Hossain, a Junior MERN Stack Web developer able to build a Web presence from the ground up - from concept, navigation, layout, and programming to UX. Experienced with a demonstrated history of working in the computer software industry. Skilled in Front End technologies such as Html5, Css3, JavaScript, React, Bootstrap, Tailwind CSS, React, and Back End technologies such as Node.JS, Express JS, and MongoDB. </p><br />

                    <p>
                    I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and personal skills in Web Development. Also eagerly wants to serve a professional organization to the best of my knowledge with true dedication, hard work, and commitment. I am down-to-earth honest, confident, fun-loving, and caring as well.
                    </p>

                    <div className='flex mt-6'>
                        <a href="https://web.facebook.com/shadek.shah.9" target={'_blank'}><img src={facebook} className='mr-3' alt="" /></a>
                        <a href="https://www.linkedin.com/in/shadek-007/" target={'_blank'}><img src={linkedin} className='mr-3' alt="" /></a>
                        <a href="https://github.com/SHadek-007" target={'_blank'}><img src={github} className='mr-3' alt="" /></a>
                        <a href="https://www.instagram.com/shadek_hossain/" target={'_blank'}><img src={instagram} className='mr-3' alt="" /></a>
                        <a href="https://twitter.com/SHadek007" target={'_blank'}><img src={twitter} className='mr-3' alt="" /></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;