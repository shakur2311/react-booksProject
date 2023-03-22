import React,{useContext,useEffect} from 'react';
import {indexContext} from '../Context/IndexContext';
import BookComponent from './BookComponent';


const HomeComponent = () => {
    const {books,setBooks,addBook} = useContext(indexContext);

    return (
        <div className='row p-3'>
            {
                books.map((book,index)=>{
                    return (
                        <BookComponent key={index} book={book} />
                    );
                })
            }
        </div>
    );
}

export default HomeComponent;
