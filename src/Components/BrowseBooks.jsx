import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { booksData } from '../utils/bookData.js';

function BrowseBooks() {
  const categoryParam = useParams();

  const [categories, setCategories] = useState([]);
  const [renderBooks, setRenderBooks] = useState([]);

  useEffect(() => {
    const uniqueCategory = new Set();

    booksData.forEach((book) => {
      uniqueCategory.add(book.categories);
    })

    setCategories([...uniqueCategory]);
  }, [])

  useEffect(() => {
    let newBooks = [];

    if (categoryParam.category === 'all') {
      newBooks = booksData;
    } else {
      newBooks = booksData.filter((book, _) => {
        // Filtering only selected category books
        return book.categories.toLowerCase() === categoryParam.category.toLowerCase();
      });
    }

    setRenderBooks(newBooks);
  }, [categoryParam])


return (
  <div>Books browse</div>
)
}

export default BrowseBooks