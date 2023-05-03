/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ ceff }) => {

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                    <LazyLoad height={256} width={200}>
                        <img className='w-52 h-64 object-fill' src={ceff.chef_picture} alt="cheff" />
                    </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{ceff.chef_name}</h2>
                <p> <span className='text-gray-700 font-semibold'>Experience:</span> {ceff.chef_experience}</p>
                <p> <span className='text-gray-700 font-semibold'>Number of Recipes:</span>   {ceff.recipe_number}</p>
                <p> <span className='text-gray-700 font-semibold'>Likes:</span>  {ceff.likes}</p>
                <Link to={`/chefs/${ceff.id}`} className="btn btn-warning font-bold">View Recipes</Link>
            </div>
        </div>
    );
};

export default ChefCard;