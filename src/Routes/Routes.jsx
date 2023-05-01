/* eslint-disable no-unused-vars */
import React from 'react';
import {createBrowserRouter,} from "react-router-dom";
import Main from '../Layout/Main';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blogs from '../Pages/Blogs/Blogs';
import ChefRecipes from '../Pages/ChefRecipes/ChefRecipes';

const router  = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            
        ]
    }
]);

export default router;