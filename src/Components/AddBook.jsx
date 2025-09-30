import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../stateUtil/booksData.slice.js'

function AddBook() {
  const [name, setname] = useState("")
  const [author, setauthor] = useState("")
  const [date, setdate] = useState("")
  const [category, setcategory] = useState("")
  const [imagelink, setimagelink] = useState("")
  const [rating, setrating] = useState(0)
  const [description, setdescription] = useState('')

   const dispatch = useDispatch();

  function addBooktoMarket() {
    const newBook = {
      "id": Date.now(),
      "title": name,
      "author": author,
      "description": description,
      "publishedDate": date,
      "categories": category,
      "imageLinks": {
        "smallThumbnail": imagelink,
        "thumbnail": imagelink
      },
      "rating": rating
    }
    dispatch(addBook(newBook));

  }
  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-col bg-white rounded-xl shadow-2xl p-6 md:p-10 border border-gray-100'>
        <h3>Add book</h3>

        <div className='flex flex-col mx-3.5'>
          <input type="text" placeholder='add book name' className='w-[60%] rounded-lg outline-none border-blue-700' value={name} onChange={(e) => setname(e.target.value)} />
          <input type="text" placeholder='add book author name' className='w-[60%] rounded-lg outline-none border-blue-700' value={author} onChange={(e) => setauthor(e.target.value)} />
          <input type="date" placeholder='select book publishedDate' className='w-[60%] rounded-lg outline-none border-blue-700' value={date} onChange={(e) => setdate(e.target.value)} />
          <select name="" id="" className='w-[60%] rounded-lg outline-none border-blue-700' value={category} onChange={(e) => setcategory(e.target.value)}>
            <option value="fiction">category 1</option>
          </select>
          <input type="link" placeholder='add image link' className='w-[60%] rounded-lg outline-none border-blue-700' value={imagelink} onChange={(e) => setimagelink(e.target.value)} />
          <input type="number" placeholder='add rating' className='w-[60%] rounded-lg outline-none border-blue-700' value={rating} onChange={(e) => setrating(e.target.value)} />
          <textarea name="" id="" placeholder='add brief description' className='w-[60%] rounded-lg outline-none border-blue-700' value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
          <button onClick={addBooktoMarket}>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default AddBook