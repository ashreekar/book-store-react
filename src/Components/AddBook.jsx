import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../stateUtil/booksData.slice.js'
import { Link } from 'react-router-dom'
import { handleForm } from '../utils/handleform.js'

function AddBook() {
  const [name, setname] = useState("")
  const [author, setauthor] = useState("")
  const [date, setdate] = useState("")
  const [category, setcategory] = useState("")
  const [imagelink, setimagelink] = useState("")
  const [rating, setrating] = useState(0)
  const [description, setdescription] = useState('')

  const [warn,setWarn]=useState(false);
  const [sucess,setSucess]=useState(false);

   const dispatch = useDispatch();

  function addBooktoMarket() {

    let goodvalue=handleForm({name,author,date,category,imagelink,rating,description});

    if(!goodvalue){
      setWarn(true);
      return;
    }

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
    setSucess(true);
  }
  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-col bg-white rounded-xl shadow-2xl p-6 md:p-10 border border-gray-100'>
        <h3>Add book</h3>

        <form className='flex flex-col mx-3.5' onSubmit={addBooktoMarket}>
          <input type="text" placeholder='add book name' className='w-[60%] rounded-lg outline-none border-blue-700' value={name} onChange={(e) => setname(e.target.value)} required/>
          <input type="text" placeholder='add book author name' className='w-[60%] rounded-lg outline-none border-blue-700' value={author} onChange={(e) => setauthor(e.target.value)} required />
          <input type="date" placeholder='select book publishedDate' className='w-[60%] rounded-lg outline-none border-blue-700' value={date} onChange={(e) => setdate(e.target.value)} required/>

          <select name="" id="" 
          className='w-[60%] rounded-lg outline-none border-blue-700' 
          value={category} 
          onChange={(e) => setcategory(e.target.value)} required>
            <option value={"fiction"} key={"fiction"} >Fiction</option>
            <option value={"Non fiction"} key={"Non fiction"} >Non Fiction</option>
            <option value={"Scifi"} key={"Scifi"} >Scifi</option>
            <option value={"Indie"} key={"Indie"} >Indie</option>
          </select>
          
          <input type="link" placeholder='add image link' className='w-[60%] rounded-lg outline-none border-blue-700' value={imagelink} onChange={(e) => setimagelink(e.target.value)} required />
          <input type="number" placeholder='add rating' className='w-[60%] rounded-lg outline-none border-blue-700' value={rating} onChange={(e) => setrating(e.target.value)} required />
          <textarea name="" id="" placeholder='add brief description' className='w-[60%] rounded-lg outline-none border-blue-700' value={description} onChange={(e) => setdescription(e.target.value)} required></textarea>
          <button className='cursor-pointer border outline-none'>Submit</button>
        </form>

      </div>

      <div className={`${warn?"fixed top-40 left-70 flex flex-col m-10 bg-blue-300 text-white font-bold rounded-lg h-40 w-[25%] items-center justify-center shadow-2xl":"hidden"}`}>
        All fields must be filled

        <button onClick={()=>setWarn(false)} className='rounded-md bg-white text-black outline-none cursor-pointer font-bold w-20'>Close</button>
      </div>

      <div className={`${sucess?"fixed top-40 left-70 flex flex-col m-10 bg-blue-300 text-white font-bold rounded-lg h-40 w-[25%] items-center justify-center shadow-2xl":"hidden"}`}>
       Sucessfully Added book

<Link to={'../'}>
        <button className='rounded-md bg-white text-black outline-none cursor-pointer font-bold w-20'>OK</button></Link>
      </div>
    </div>
  )
}

export default AddBook