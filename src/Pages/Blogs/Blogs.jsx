/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
    return (
        <div  className='mt-10 bg-gray-50 py-10'>

            <div className="container mx-auto bg-sky-50 flex justify-between items-center  px-4">
                <h1 className='text-3xl font-bold my-5'>Blog Posts</h1>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-warning' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>

            <div   className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-4">

                <div ref={ref} className='card p-4 shadow-2xl bg-sky-100'>
                    <h2 className='text-xl font-bold'>
                        Differences between uncontrolled and controlled components.
                    </h2>
                    <p className='text-gray-500 my-4'>

                        In react <span className='font-bold'>Uncontrol</span> components refers to the components who control their states by their own. <br />

                        <span className='font-bold'>Control</span> components in react refers to the components who are control by the states from their parent components. <br />

                        This is the Basic difference between controlled and uncontrolled components.

                    </p>
                </div>
                <div className='card p-4 shadow-2xl bg-violet-100'>
                    <h2 className='text-xl font-bold'>
                        How to validate React props using PropTypes
                    </h2>
                    <p className='text-gray-500 my-4'>
                        At first we have to install 'prop-types' package separately using a package manager. then we have to import PropTypes from 'prop-types'. then we have to declare our expected proptypes using a static proptype object. then we can pass any types of props which we defined and they will automatically validated. if we send unknown type props it will give error on console. this is how we can validate props in react.
                    </p>
                </div>
                <div className='card p-4 shadow-2xl bg-violet-100'>
                    <h2 className='text-xl font-bold mb-4 md:mb-10'>
                        Difference between nodejs and express js.
                    </h2>
                    <p className='text-gray-500 my-4'>
                        <span className='font-bold'>Node js</span> is a js runtime javeScript environment that allows developers to write server side code using javeScript. It provides an non-blocking ,event-driven,  I/O model, which makes it lightweight and efficient. it used for server side applications. <br />

                        is a web application framework built on top of node js. It provides an sets of feachers and tools for building web applications. Express.js can help developer by simplify and streamline the development process using it's common tools and conventions.
                    </p>
                </div>
                <div className='card p-6 shadow-2xl bg-sky-100'>
                    <h2 className='text-xl font-bold'>
                        What is a custom hook, and why will you create a custom hook?
                    </h2>
                    <p className='text-gray-500 my-4'>

                        Custom hook is a reuseable javascript function that used in react to share bunch of code between multiple components. It allows us to extract and reuse logic that will commonly shared on components. <br />

                        we will create custom hook for make our code efficient and reduce the redandency of same code. <br />

                        we will create custom hook in a situation where we have to share same logic between multiple components. <br />

                        <span className='font-bold'>Some uses cases are:</span> API calls, Authentication, State management etc.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;