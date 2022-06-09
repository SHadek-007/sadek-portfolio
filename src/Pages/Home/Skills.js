import React from 'react';

const Skills = () => {
    return (
        <div className='bg-accent px-5 md:px-28 my-20'>
            <h1 className='text-4xl text-center font-bold f-style pt-10 mb-16'>My <span className='text-secondary'>Skills</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div>
                <p>MongoDB</p>
                <progress className="progress progress-secondary w-56" value="80" max="100"></progress>
                </div>
                <div>
                <p>Express.js</p>
                <progress className="progress progress-secondary w-56" value="50" max="100"></progress>
                </div>
                <div>
                <p>React.js</p>
                <progress className="progress progress-secondary w-56" value="85" max="100"></progress>
                </div>
                <div>
                <p>Node.js</p>
                <progress className="progress progress-secondary w-56" value="60" max="100"></progress>
                </div>
                <div>
                <p>JavaScript</p>
                <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
                </div>
                <div>
                <p>Tailwind CSS</p>
                <progress className="progress progress-secondary w-56" value="90" max="100"></progress>
                </div>
                <div>
                <p>Bootstrap</p>
                <progress className="progress progress-secondary w-56" value="90" max="100"></progress>
                </div>
                <div>
                <p>Firebase</p>
                <progress className="progress progress-secondary w-56" value="75" max="100"></progress>
                </div>
            </div>
            <div className='flex-wrap md:flex gap-10 justify-around items-center pb-20'>
                <div className=' mt-7'>
                <p>CSS</p>
                <progress className="progress progress-secondary w-56" value="75" max="100"></progress>
                </div>
                <div  className=' mt-7'>
                <p>HTML</p>
                <progress className="progress progress-secondary w-56" value="90" max="100"></progress>
                </div>
                </div>
        </div>
    );
};

export default Skills;