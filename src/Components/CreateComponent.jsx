import React, {useContext,useEffect} from 'react';
import FormComponent from './FormComponent';
import {indexContext} from '../Context/IndexContext';

const CreateComponent = () => {
    const {books,setBooks,addBook} = useContext(indexContext);

    return (
        <div className='d-flex justify-content-center' style={{paddingTop:100}}>
            <FormComponent/>
        </div>
    );
}

export default CreateComponent;
