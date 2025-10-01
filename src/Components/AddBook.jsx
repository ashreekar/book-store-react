import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../stateUtil/booksData.slice.js'
import { Link } from 'react-router-dom'

function AddBook() {
    // states that stores book deatils
    const booksData = useSelector(store => store.books.items); //fetching book data to show different categories
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
        // setting new category
        booksData.forEach((book) => {
            uniqueCategory.add(book.categories.split().join('').toLowerCase());
        })

        setCategories([...uniqueCategory]);
    }, [])

    // state to warn if bad entry goes , sucess on suceesful upload and showing dynamic reason of rejection
    const [warn, setWarn] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [reasonRejction, setreasonRejction] = useState("")

    const dispatch = useDispatch();  // method to dispatch action to redux store

    function addBooktoMarket() {

        // Need to validate form before adding

        // 1) check for title match
        // 2) evry field is mandatorily checked for required
        const titleMatch = booksData.filter((book) => {
            return book.title === name;
        })

        if (titleMatch.length > 0) {
            setWarn(true);
            setreasonRejction("title");
            return;
        }

        // check rating range
        if (rating == 0 || rating > 5) {
            setWarn(true);
            setreasonRejction("rating");
            return;
        }

        // check how descriptive it is
        if (description.length < 20 || description.length > 150) {
            setWarn(true);
            setreasonRejction("description");
            return;
        }

        // setting up new object to dispatch as a payload
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
        // addBook is a reducer fn that will recieve newbook action
        dispatch(addBook(newBook));
        setSucess(true); // shows sucees message on update
    }
    return (
        <div className='max-w-5xl mx-auto px-2 sm:px-2 lg:px-4 py-4'>
            <div className='flex flex-col bg-white rounded-3xl shadow-2xl p-2 md:p-4 border border-gray-100'>
                <h3 className='text-center text-xl font-extrabold text-gray-900 mb-4'>
                    Add New Book to Market
                </h3>

                {/* Setting up form */}
                <form
                    className='flex flex-col items-center gap-2'
                    onSubmit={(e) => {
                        e.preventDefault();
                        addBooktoMarket(e);
                    }}
                >
                    {/* Book name */}
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

                    {/* Author name */}
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
                    {/* Publicattion date */}
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
                    {/* category of book */}
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
                            {/* Default opton cant be selected */}
                            <option value="" disabled>Select Category</option>
                            {
                                // rendering different categories
                                categories.map((cat) => (
                                    <option value={cat} key={cat}>{cat}</option>
                                ))
                            }
                        </select>
                    </div>
                    {/* image link can be added */}
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
                    {/* rating field out of 5 */}
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
                    {/* description of the book */}
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
                    {/* Button to submit */}
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

            {/* Rendering these componets on validation error  */}
            <div className={`${warn ? "fixed inset-0 flex items-center justify-center z-50 bg-opacity-40 backdrop-blur-sm" : "hidden"}`}>
                <div className="flex flex-col text-black font-semibold rounded-xl p-8 max-w-xs w-full shadow-2xl space-y-4 bg-white">
                    <h4 className='text-2xl font-bold mb-2 flex items-center'>
                        Validation Error
                    </h4>
                    {/* Showingn dynamic reasonn of rejection */}
                    <p>Rejection due to {reasonRejction} field</p>
                    <p>{reasonRejction == "title" ? "Book with title is already exists" : (reasonRejction === "rating" ? "Rating should be within range of 1 to 5" : "Description should have at least 10 characters and at most 200 characters")}</p>
                    {/* Before closing setting state of warn false so it is again form */}
                    <button
                        onClick={() => setWarn(false)}
                        className='rounded-lg bg-blue-600 text-white font-extrabold outline-none cursor-pointer w-full py-2 hover:bg-blue-600 transition duration-150 shadow-md'
                    >
                        Close
                    </button>
                </div>
            </div>

            {/* On sucees div to render */}
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