import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex w-full h-16 bg-white border-b border-gray-200 px-4 sm:px-8 items-center justify-between'>
        <div>
            <h1 className='text-xl font-medium text-gray-800 tracking-tight'>Book Store</h1>
        </div>

        <nav>
            <ul className='flex space-x-6 text-sm font-medium'>
                <Link to={'/'}>
                <li className='cursor-pointer text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out'>Home</li>
                </Link>

                <Link to={'/books/all'}>
                <li className='cursor-pointer text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out'>Browse Books</li>
                </Link>

                <Link to={'/addbook'}>
                <li className='cursor-pointer px-3 py-1 -my-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-150 ease-in-out'>Add Book</li>
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header