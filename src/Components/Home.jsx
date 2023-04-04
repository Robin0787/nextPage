import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from "lottie-react";
import React from 'react';
import { Link } from "react-router-dom";
import animation from '../assets/animation-2.json';
<Lottie animationData={animation} loop={true} />


const Home = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between lg:gap-28 h-[75vh]'>
            <div className='w-full md:w-1/2 h-full flex items-center'>
                <div className="p-4">
                <span className="text-xs inline p-1 px-3 font-semibold bg-yellow-400 rounded-full text-black">ON SALE!</span>
                <h2 className="text-3xl lg:text-4xl font-bold my-5">A reader lives a <br />
                    thousand lives <span className="text-blue-500">before he dies</span></h2>
                <p className="text-md md:text-lg tracking-normal leading-snug text-gray-700 lg:pr-10 text-justify mb-6">Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='flex gap-4'>
                <Link to='/books' className="text-white bg-blue-500 flex gap-1 font-bold p-3 md:px-6 md:py-3 rounded-md">
                Visit Store <ShoppingCartIcon className="h-6 w-6"/>
                </Link>
                <button className='text-lg hover:text-blue-500 duration-300'>Learn More</button>
                </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 p-6'>
                <Lottie className='h-full' animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Home;