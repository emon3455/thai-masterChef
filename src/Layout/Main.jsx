/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div className='relative'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;