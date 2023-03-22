import React, {useEffect,useContext,useState} from 'react';
import { useParams } from 'react-router-dom';
import {indexContext} from '../Context/IndexContext';
const BookInfoComponent = () => {
    const {books,setBooks,findBook} = useContext(indexContext);
    const { titulo } =  useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        setBook(findBook(titulo));
    }, []);

    return (
        <div>
            {
                book ? 
                <div className='d-flex flex-column align-items-center pt-5'>
                    <img src={book.imagen} alt="" />
                    <div className='my-3'>Titulo : {book.titulo}</div>
                    <div className='my-3'>Autor : {book.autor}</div>
                    <div className='my-3'>Sinopsis : {book.sinopsis}</div>
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default BookInfoComponent;
