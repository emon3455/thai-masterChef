/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const NavBar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(res=>{
            toast("Log Out Done!!")
        })
        .catch(er=>{
            toast("Please Try Again !!");
        })
    }

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
                                {
                                    user &&
                                    <div className="">
                                        <button onClick={handleLogout} className='btn-warning ml-2 lg:hidden p-2 rounded-lg font-semibold'>Log Out</button>
                                    </div>
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-lg md:text-2xl font-bold" >Thai Master Chefs</a>
                    </div>
                    
                    <div className="navbar-end space-x-2">

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li className="text-lg font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                            </ul>
                        </div>

                        <label>
                            {
                                user &&
                                <div className="">
                                    <button onClick={handleLogout} className='btn-warning hidden lg:block lg:p-2 rounded-lg font-semibold'>Log Out</button>
                                </div>
                            }
                        </label>

                        <label className=""> 
                            {
                                user 
                                ? 
                                <div className="btn btn-ghost btn-circle avatar">
                                    <img className='w-7 md:w-10 rounded-full' src={user.photoURL} title={`${user.displayName ? user.displayName : ""}`}/>
                                </div>
                                :
                                <li className="p-1 md:px-2 list-none rounded-lg btn-warning text-lg font-semibold"><ActiveLink to="/login">Login</ActiveLink></li>
                            }

                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;