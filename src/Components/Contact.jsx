/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {

    const handleSend = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const message = e.target.message.value;
        if(message){
            toast("Message Send")
        }
        else{
            toast("Please Enter Your message first!!");
        }
        e.target.reset();
    }

    return (
        <div className="bg-violet-100 p-6">
            <h2 className='text-center my-5 text-4xl font-bold'>Contact</h2>
            <div className=' mt-16 md:mt-4 flex flex-col md:flex-row justify-between items-center h-2/3 '>
                <div className=" w-full md:w-1/2 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSend} className="card-body">
                        <h2 className="text-3xl text-center font-semibold">Send Message</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name="email" id="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name='message' placeholder="Message" className="bg-gray-100 rounded-lg p-2 h-24" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-warning">Send</button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 p-4 mx-auto">
                    <h2 className="text-3xl text-center font-semibold mb-4">Our Location</h2>
                    <div className='card p-2'>
                        <iframe className='rounded-lg mb-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933516.684186121!2d90.80318782794699!3d12.842066633293761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sbd!4v1682984501126!5m2!1sen!2sbd"
                            width="100%"
                            height="400"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;