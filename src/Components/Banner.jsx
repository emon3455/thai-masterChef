/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-black bg-blend-multiply bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">
                        Welcome To <br />
                        <span>Thai Chefs Master !!!</span>
                    </h1>
                    <p className="mb-5">
                        Here you can get best chefs of thailand and they are world famous for their dices. you can select your favourite one and explore some exting and delecious dices.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;