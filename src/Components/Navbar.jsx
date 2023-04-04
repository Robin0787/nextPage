import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import "./Navigation.css";

import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center p-3 py-4 bg-gray-100 mb-8 relative'>
            <Link to='/' className='flex items-center justify-center'>
                <BoltIcon className='text-blue-600 h-6 w-6' />
                <span className="text-gray-600 text-xl tracking-wide ml-2 font-bold">nextPage</span>

            </Link>
            <div className='md:hidden'>
                <div>
                    <Bars3BottomRightIcon className='h-6 w-6 cursor-pointer' onClick={() => { setIsMenuOpen(!isMenuOpen) }} />
                </div>
                {
                    isMenuOpen && (
                        <div className='absolute shadow-md top-0 left-0 border-2 bg-white p-4 w-full space-y-8'>
                            <div className='flex justify-between items-center bg-gray-100 p-3'>
                                <Link to='/' className='flex items-center justify-center'>
                                    <BoltIcon className='text-blue-600 h-6 w-6' />
                                    <span className="text-gray-600 text-xl tracking-wide ml-2 font-bold">nextPage</span>
                                </Link>
                                <XMarkIcon className='h-6 w-6 cursor-pointer' onClick={() => { setIsMenuOpen(!isMenuOpen) }} />
                            </div>
                            <ul className={`space-y-4 flex flex-col gap-4 text-center`}>
                                <NavLink to='/' onClick={() => {setIsMenuOpen(!isMenuOpen)}} className={({ isActive }) => isActive ? 'active' : 'default'}>Home</NavLink>
                                <NavLink to='/books' onClick={() => {setIsMenuOpen(!isMenuOpen)}} className={({ isActive }) => isActive ? 'active' : 'default'}>Books</NavLink>
                                <NavLink to='/about' onClick={() => {setIsMenuOpen(!isMenuOpen)}} className={({ isActive }) => isActive ? 'active' : 'default'}>About</NavLink>
                            </ul>
                        </div>
                    )
                }
            </div>
            <ul className={`gap-4 space-x-2 hidden md:flex`}>
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>Home</NavLink>
                <NavLink to='/books' className={({ isActive }) => isActive ? 'active' : 'default'}>Books</NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : 'default'}>About</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;