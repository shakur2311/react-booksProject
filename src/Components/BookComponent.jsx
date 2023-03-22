import React from 'react';
import {Link} from 'react-router-dom';

const BookComponent = ({book}) => {
    return (
        <div className='col-2 bookComponent'>
            <Link to={`/info/${book.titulo}`}>
                <div className='card'>
                    <div>
                        <img src={book.imagen} alt="" style={{width:'100%',height:300}}/>
                    </div>
                    <div className='p-3 text-center'>
                        {book.titulo}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default BookComponent;
