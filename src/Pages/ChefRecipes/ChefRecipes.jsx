/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../../Components/Recipe';

const ChefRecipes = () => {

    const cheff = useLoaderData();
    const recipes = cheff.recipe_info;

    return (
        <div className='container mx-auto mt-24 mb-20'>

            <div className="p-4">
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3 card bg-base-100 shadow-xl">
                    <figure><img src={cheff.chef_picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cheff.chef_name}</h2>
                        <p className='text-justify text-gray-700'>{cheff.chef_description}</p>
                        <div className="flex">
                            <p className='font-semibold'>Likes: {cheff.likes}</p>
                            <p className='text-end font-semibold'>Recipe No: {cheff.recipe_number}</p>
                        </div>
                        <p className='font-semibold text-center'>Experience: {cheff.chef_experience}</p>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h2 className='text-4xl font-bold mt-6 mb-10 text-violet-600'>Recipes:</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 p-2">
                    {
                        recipes.map((res, indx) => <Recipe key={indx} recipe={res}></Recipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;