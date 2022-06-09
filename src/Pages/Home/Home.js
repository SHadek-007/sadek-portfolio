import React from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import SendMessage from './SendMessage';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <SendMessage></SendMessage>
        </div>
    );
};

export default Home;