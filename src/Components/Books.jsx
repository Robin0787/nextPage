import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Books = () => {
    const {books} = useLoaderData();
    return (
        <div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {
                books.map((book) => <SingleBook key={book.isbn13} book={book}/>)
            }
        </div>
    );
};

function SingleBook({book}) {
    const {image,isbn13,price,subtitle,title,url} = book;
    console.log(book);
    return (
        <Link to={`../book/${isbn13}`} className='relative'>
            <div className='shadow-lg rounded-md overflow-hidden transform hover:-translate-y-1 duration-300 cursor-pointer'>
            <img className='object-cover z-0 w-full h-full' src={image} />
            <div className='bg-black px-4 py-6 md:py-3 bg-opacity-75 opacity-0 hover:opacity-100 duration-300  text-gray-300 absolute top-0 left-0 inset-0 flex flex-col'>
                <h2 className="text-xl md:text-lg font-semibold">{title}</h2>
                <p className="text-md md:text-sm mt-4">{subtitle.slice(0,45)}...</p>
                <p className="text-sm mt-auto">{price}</p>
            </div>
        </div>
        </Link>
    )
}

export default Books;