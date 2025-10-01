import React from 'react'
import { Link } from 'react-router-dom'


function BookNotFound() {
  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-[80vh]'>
          <div className='flex items-center justify-center bg-white rounded-xl shadow-2xl p-6 md:p-10 border border-gray-100 min-h-[80vh]'>
    
            <div className='md:w-2/3 flex items-center justify-center flex-col'>
    
              <h1 className='text-4xl font-extrabold text-gray-900 mb-2'>404</h1>
    
              <p className='text-xl font-medium text-gray-600 mb-6'><span className='text-blue-600'>Opps book not found</span></p>

    
              <h3 className='text-2xl font-semibold text-gray-800'>Sorry book you are searching is not found</h3>
    
              <Link to={'/'}>
                <button className='cursor-pointer mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]'>
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default BookNotFound