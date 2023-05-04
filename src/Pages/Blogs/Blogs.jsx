/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import BlogPosts from '../../Components/BlogPosts';

const ref = React.createRef();

const Blogs = () => {
    return (
        <div  className='mt-10 bg-gray-50 py-10'>

            <div className="my-5 container mx-auto bg-sky-50 flex justify-between items-center  px-4">
                <h1 className='text-3xl font-bold my-5'>Blog Posts</h1>
                <PDFDownloadLink document={<BlogPosts></BlogPosts>} filename="FORM">
                    {({loading}) => <button className='btn btn-warning'> Generate Pdf</button>}
                </PDFDownloadLink>
            </div>

            <BlogPosts></BlogPosts>

        </div>
    );
};

export default Blogs;