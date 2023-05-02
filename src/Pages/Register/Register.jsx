/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {

    const [error , setError] = useState("");
    const {createUser} = useContext(AuthContext);

    const handleRegisterSubmit = (e)=>{
        setError("")
        e.preventDefault();
        const form  = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if(password.length < 6){
            setError("Password have to atleast 6 character");
            return;
        }
        
        createUser(email,password)
        .then(res=>{
            const regUser = res.user;
            //for update user info
            updateProfile(regUser, {
                displayName: name,
                photoURL: photo,
              })
              .then(() => {
                toast("User Successfully created!!");
              })
              .catch((err) => {
                setError(err.message)
                return;
              });
            
              form.reset();
              
        })
        .catch(er=>{
            setError(er.message);
            return;
        })

    }

    return (
        <div className="flex flex-col justify-center items-center my-14">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegisterSubmit} className="card-body">
                    <h2 className="text-3xl font-bold text-center">Register</h2>
                    <p className="text-center text-red-600">{error && error}</p>
                    <div className="">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" name="name" placeholder="name" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" name="email" placeholder="email" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required type="password" name="password" placeholder="password" className="p-2 border-2 rounded-lg w-full" />
                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text ">photo url</span>
                        </label>
                        <input required type="text" name="photo" placeholder="photo url" className="p-2 border-2 rounded-lg w-full" />
                    </div>

                    <button type="submit" className="mt-2 btn btn-warning font-bold">Register</button>

                    <p className="text-center text-gray-600">
                        Already have an Account? <Link className="text-sky-600" to="/login">Login</Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Register;