/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const NavBar = () => {
    return (
        <header className="bg-opacity-80 bg-white bg-blend-multiply fixed top-0 z-30 w-full">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="text-lg font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/login">Login</ActiveLink></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-lg md:text-2xl font-bold" >Thai Master Chefs</a>
                    </div>
                    
                    <div className="navbar-end space-x-2">

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li className="text-lg font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/login">Login</ActiveLink></li>
                            </ul>
                        </div>

                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-7 md:w-10 rounded-full">
                                <img src={"https://img.freepik.com/free-icon/user_318-563642.jpg?q=10&h=200"} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;