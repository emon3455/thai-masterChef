/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Components/Banner';
import Chefs from '../../Components/Chefs';
import Contact from '../../Components/Contact';
import About from '../../Components/About';

const Home = () => {
    return (

        <div className="">
            <Banner></Banner>
            <About></About>
            <Chefs></Chefs>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;