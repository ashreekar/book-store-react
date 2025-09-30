import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./booksData.slice.js"


const appStore=configureStore({
    reducer:{
        books:bookReducer,
    }
})

export default appStore;