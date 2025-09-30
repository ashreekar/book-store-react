import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./booksData.slice.js"

 const loadState = () => {
    const storedS = localStorage.getItem('reduxState');
    if (storedState === null) return undefined; 
    return JSON.parse(storedState);
};

 const saveState = (state) => {
    const storedState = JSON.stringify(state);
    localStorage.setItem('reduxState', storedState);
};


const persistedState = loadState();

const appStore=configureStore({
    reducer:{
        books:bookReducer,
    },
    preloadedState:persistedState
})

appStore.subscribe(() => {
  saveState(appStore.getState()); 
})

export default appStore;