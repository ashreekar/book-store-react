import React from 'react'
import { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../stateUtil/booksData.slice.js'
import { Link } from 'react-router-dom'
import { handleForm } from '../utils/handleform.js'
import { useSelector } from 'react-redux';

function AddBook() {
      const booksData=useSelector(store=>store.books.items);
  const [name, setname] = useState("")
  const [author, setauthor] = useState("")
  const [date, setdate] = useState("")
  const [category, setcategory] = useState("")
  const [imagelink, setimagelink] = useState("")
  const [rating, setrating] = useState(0)
  const [description, setdescription] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
      const uniqueCategory = new Set();
  
      booksData.forEach((book) => {
        uniqueCategory.add(book.categories.split().join('').toLowerCase());
      })
  
      setCategories([...uniqueCategory]);
    }, [])

  const [warn, setWarn] = useState(false);
  const [sucess, setSucess] = useState(false);

  const dispatch = useDispatch();

  function addBooktoMarket() {

    let goodvalue = handleForm({ name, author, date, category, imagelink, rating, description });

    if (!goodvalue) {
      setWarn(true);
      return;
    }

     const titleMatch = booksData.filter((book) => {
        return book.title === name;
    })

    if (titleMatch.length > 0){ 
        setWarn(true); 
        return ;
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
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='flex flex-col bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-100'>
                <h3 className='text-center text-2xl font-extrabold text-gray-900 mb-8'>
                    Add New Book to Market
                </h3>

                <form 
                    className='flex flex-col items-center gap-4' 
                    onSubmit={(e) => {
                        e.preventDefault();
                        // This logic remains untouched
                        addBooktoMarket(e);
                    }}
                >
                    {/* Form Group: Book Name */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="bookName" className='block text-sm font-medium text-gray-700 mb-1'>Book Title</label>
                        <input 
                            id="bookName"
                            type="text" 
                            placeholder='Enter the book title' 
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150' 
                            value={name} 
                            onChange={(e) => setname(e.target.value)} 
                            required 
                        />
                    </div>

                    {/* Form Group: Author Name */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="authorName" className='block text-sm font-medium text-gray-700 mb-1'>Author Name</label>
                        <input 
                            id="authorName"
                            type="text" 
                            placeholder='Enter the author name' 
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150' 
                            value={author} 
                            onChange={(e) => setauthor(e.target.value)} 
                            required 
                        />
                    </div>

                    {/* Form Group: Published Date */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="publishedDate" className='block text-sm font-medium text-gray-700 mb-1'>Published Date</label>
                        <input 
                            id="publishedDate"
                            type="date" 
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150' 
                            value={date} 
                            onChange={(e) => setdate(e.target.value)} 
                            required 
                        />
                    </div>

                    {/* Form Group: Category */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="category" className='block text-sm font-medium text-gray-700 mb-1'>Category</label>
                        <select 
                            id="category"
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 bg-white 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 appearance-none' 
                            value={category}
                            onChange={(e) => setcategory(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select Category</option>
                            {
                                categories.map((cat) => (
                                    <option value={cat} key={cat}>{cat}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                    {/* Form Group: Image Link */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="imageLink" className='block text-sm font-medium text-gray-700 mb-1'>Cover Image Link (URL)</label>
                        <input 
                            id="imageLink"
                            type="url" 
                            placeholder='e.g., https://example.com/cover.jpg' 
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150' 
                            value={imagelink} 
                            onChange={(e) => setimagelink(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    {/* Form Group: Rating */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="rating" className='block text-sm font-medium text-gray-700 mb-1'>Rating (0.0 to 5.0)</label>
                        <input 
                            id="rating"
                            type="number" 
                            placeholder='e.g., 4.5' 
                            min="0"
                            max="5"
                            step="0.1"
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150' 
                            value={rating} 
                            onChange={(e) => setrating(e.target.value)} 
                            required 
                        />
                    </div>

                    {/* Form Group: Description */}
                    <div className='w-full max-w-lg'>
                        <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-1'>Brief Description</label>
                        <textarea 
                            id="description"
                            placeholder='A short summary of the book...' 
                            rows="4"
                            className='w-full rounded-xl outline-none border-2 border-gray-300 p-3 
                                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none' 
                            value={description} 
                            onChange={(e) => setdescription(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className='mt-4 w-full max-w-lg cursor-pointer outline-none bg-blue-600 
                                   hover:bg-blue-700 rounded-xl px-8 py-3 text-white font-extrabold text-lg 
                                   shadow-lg transition duration-200 hover:shadow-xl'
                    >
                        Add Book
                    </button>
                </form>

            </div>

            {/* Warning Modal (Redesigned for better centering and visual hierarchy) */}
            <div className={`${warn ? "fixed inset-0 flex items-center justify-center z-50 bg-opacity-40 backdrop-blur-sm" : "hidden"}`}>
                <div className="flex flex-col text-black font-semibold rounded-xl p-8 max-w-xs w-full shadow-2xl space-y-4 bg-white">
                    <h4 className='text-2xl font-bold mb-2 flex items-center'>
                         Validation Error
                    </h4>
                    <p>All fields must be filled.</p>

                    <button 
                        onClick={() => setWarn(false)} 
                        className='rounded-lg bg-blue-600 text-white font-extrabold outline-none cursor-pointer w-full py-2 hover:bg-blue-600 transition duration-150 shadow-md'
                    >
                        Close
                    </button>
                </div>
            </div>

            {/* Success Modal (Redesigned for better centering and visual hierarchy) */}
            <div className={`${sucess ? "fixed inset-0 flex items-center justify-center z-50 bg-opacity-40 backdrop-blur-sm" : "hidden"}`}>
                <div className="flex flex-col text-black font-semibold rounded-xl p-8 max-w-xs w-full shadow-2xl space-y-4 bg-white">
                     <h4 className='text-2xl font-bold mb-2 flex items-center'>
                         Success!
                     </h4>
                     <p>Successfully Added book.</p>

                    <Link to={'../'} className='w-full'>
                        <button 
                            className='rounded-lg bg-blue-600 text-white font-extrabold outline-none cursor-pointer w-full py-2 hover:bg-blue-600 transition duration-150 shadow-md'
                        >
                            OK
                        </button>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default AddBook