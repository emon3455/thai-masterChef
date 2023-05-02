/* eslint-disable no-unused-vars */
import React from 'react';
import chefs from "../assets/cheffs.jpg"
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const About = () => {
    return (
        <div className='mt-10 p-4'>

            <h2 className='text-4xl text-center mb-10 font-bold '>About Us</h2>

            <div className="flex flex-col-reverse md:flex-row md:justify-around items-center gap-10 mb-5">
                <div className=" w-full md:w-1/2">
                    <div className="">
                        <h4 className='text-3xl text-center mb-5 font-bold'>Thai Master Chefs</h4>
                        <p className='text-xl text-gray-500 text-justify px-4'>
                            This is a place where you will get all the top ranked chefs of Thailand. you will get to know about their few personal informations about their chefs career and their achivements. And most importantly you will know about each chefs recipes. In each recepies you will get to know about ingradients also the cooking methos so what are you waiting for!, Explore our website. For get full access to our website please 
                            <ActiveLink to="/login"> <span className='link text-sky-600'>Log In</span> </ActiveLink>
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-4">
                    <img className='w-full rounded-lg' src={chefs} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;