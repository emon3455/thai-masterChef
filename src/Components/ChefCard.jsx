/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ChefCard = ({ ceff }) => {

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-52 h-64 object-fill' src={ceff.chef_picture} alt="cheff" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ceff.chef_name}</h2>
                <p>Experience: {ceff.chef_experience}</p>
                <p>Number of Recipes: {ceff.recipe_number}</p>
                <p>Likes: {ceff.likes}</p>
                <button className="btn btn-primary">View Recipes</button>
            </div>
        </div>
    );
};

export default ChefCard;