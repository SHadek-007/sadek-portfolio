import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;