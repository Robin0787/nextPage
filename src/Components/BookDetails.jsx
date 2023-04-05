import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const details = useLoaderData();
    const [fold, setFold] = useState(true);
    const { authors, desc, image, language, pages, price, publisher, rating, subtitle, title, url, year } = details;

    

    return (
        <div className='shadow-md rounded-md flex flex-col-reverse md:flex-row gap-6 border lg:h-[75vh] p-2'>
            <div className='md:w-1/2 px-4 md:px-12 py-0 bg-gray-50'>
                <img className='object-fit w-full h-full' src={image} />
            </div>
            <div className='md:w-1/2 p-6'>
                <span className="text-xs inline p-1 px-3 font-semibold bg-yellow-400 rounded-full text-black">BRAND NEW</span>
                <h2 className="text-2xl font-bold my-3">{title}</h2>
                <p className="text-md">Authors: {authors}</p>
                <p className="text-md my-1">Publisher: {publisher}</p>
                <p className="text-md">Year: {year}</p>
                <p className="text-md my-1">Rating: {rating}</p>
                {
                    fold
                        ?
                        <p className='text-justify'>{desc.slice(0, 100)}<span className='text-blue-500 cursor-pointer' onClick={() => setFold(!fold)}>...Read More</span></p>
                        :
                        <p className='text-justify'>{desc}<span className='text-blue-500 cursor-pointer' onClick={() => setFold(!fold)}>...Read Less</span></p>
                }
                <div className='flex gap-4 my-4'>
                    <button onClick={() => { location.href = url }} className="text-white bg-blue-500 flex gap-1 font-bold p-3 md:px-6 md:py-3 rounded-md">
                        Buy Now
                    </button>
                    <button className='text-lg font-bold text-gray-700'>Price: {price}</button>
                </div>
            </div>

        </div>
    )
};

export default BookDetails;