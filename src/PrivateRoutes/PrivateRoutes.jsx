/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="h-96 flex justify-center items-center">
                    <progress className="progress w-56"></progress>
                </div>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>

};

export default PrivateRoutes;