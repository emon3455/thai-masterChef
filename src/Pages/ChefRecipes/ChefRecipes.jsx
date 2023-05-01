/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {

    const cheff = useLoaderData();

    return (
        <div>
            <h1>Chefs recepies are comming</h1>
        </div>
    );
};

export default ChefRecipes;