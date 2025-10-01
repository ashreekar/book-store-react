import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./booksData.slice.js"

// store for storing all slices

 const loadState = () => {
    // loading the loadstore on start state
    const storedState = localStorage.getItem('reduxState');
    if (storedState === null) return undefined; 
    return JSON.parse(storedState);
};

// save store to save after every update(action dispatch)
 const saveState = (state) => {
    const storedState = JSON.stringify(state);
    localStorage.setItem('reduxState', storedState);
};

// state of initial data 
const persistedState = loadState();

const appStore=configureStore({
    reducer:{
        books:bookReducer,
    },
    // state of initiaal data
    preloadedState:persistedState
})

// on every dispatch it calls
appStore.subscribe(() => {
  saveState(appStore.getState()); 
})

export default appStore;