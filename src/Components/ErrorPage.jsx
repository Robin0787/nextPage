import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status} = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center h-[85vh] gap-2'>
            <p className="text-4xl">Error <br /></p>
            <p className="text-3xl font-thin">{error.message}</p>
        </div>
    );
};

export default ErrorPage;