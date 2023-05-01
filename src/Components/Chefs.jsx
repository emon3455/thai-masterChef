/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ChefCard from './chefCard';

const Chefs = () => {

    
    const [chefs , setChefs] = useState([]);

    useEffect(()=>{
        fetch("https://thai-master-cheff-server-emon3455.vercel.app/chefs")
        .then(res=> res.json())
        .then(data=> setChefs(data))
        .catch(er=>{
            console.log(er.message);
        })
    },[])



    return (

        <section className='py-20 bg-gray-100 '>

            <h2 className='text-4xl text-center font-bold my-10'>Our Top Chefs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
                {
                    chefs.slice(0,8).map(cf => <ChefCard key={cf.id} ceff={cf}></ChefCard>)
                }
            </div>

        </section>
    );
};

export default Chefs;