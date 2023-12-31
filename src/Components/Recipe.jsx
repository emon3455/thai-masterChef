/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Recipe = ({ recipe }) => {

    const [favourite , setFavourite] = useState(false);

    const handleFabourite = () =>{
        toast("Added To Favourite");
        setFavourite(true);
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="font-bold text-xl  lg:text-2xl text-left  xl:text-center mb-3 text-orange-500">{recipe.recipe_name}</h2>
                <h4 className='font-bold'>
                    Ingradient
                </h4>
                <ul className='text-gray-600'>
                    {
                        recipe.ingredients.map((ing, indx)=> <li key={indx}> {indx+1}. {ing} </li>)
                    }
                </ul>
                <h4 className='font-bold'>
                    Cooking Method
                </h4>
                <ul className='text-gray-600'>
                    {
                        recipe.cooking_method.map((methd, indx)=> <li key={indx}> {indx+1}. {methd} </li>)
                    }
                </ul>

                <p className='font-medium'>Rating: {recipe.rating}</p>

                <button onClick={handleFabourite} className="btn btn-warning" disabled={favourite}>Favourite</button>
            </div>
        </div>
    );
};

export default Recipe;