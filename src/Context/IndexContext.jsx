import {createContext, useState, useEffect } from 'react'

export const indexContext = createContext(null);


const IndexContext = ({children}) => {
    const [books,setBooks] = useState([]);
    const addBook = (book)=>{
        setBooks([...books,book])
    }
    const findBook = (titulo)=>{
        return books.find((book)=> book.titulo==titulo);
    }
    
    return (
        <indexContext.Provider value={{
            books,
            setBooks,
            addBook,
            findBook
        }}>
            {children}
        </indexContext.Provider>
    );
}

export default IndexContext;
