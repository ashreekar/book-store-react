import React from 'react'

function AddBook() {
  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-col bg-white rounded-xl shadow-2xl p-6 md:p-10 border border-gray-100'>
        <h3>Add book</h3>

        <div className='flex flex-col mx-3.5'>
          <input type="text" placeholder='add book name' className='w-[60%] rounded-lg outline-none border-blue-700' />
          <input type="text" placeholder='add book author name' className='w-[60%] rounded-lg outline-none border-blue-700' />
          <input type="date" placeholder='select book publishedDate' className='w-[60%] rounded-lg outline-none border-blue-700' />
          <select name="" id="" className='w-[60%] rounded-lg outline-none border-blue-700'>
            <option value="">category 1</option>
          </select>
          <input type="link" placeholder='add image link' className='w-[60%] rounded-lg outline-none border-blue-700' />
          <input type="number" placeholder='add rating' className='w-[60%] rounded-lg outline-none border-blue-700' />
          <textarea name="" id="" placeholder='add brief description' className='w-[60%] rounded-lg outline-none border-blue-700'></textarea>
          <button>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default AddBook