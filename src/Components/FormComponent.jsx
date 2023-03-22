import React,{useContext,useState} from 'react';
import {indexContext} from '../Context/IndexContext';
import { Navigate, useNavigate } from 'react-router-dom';

const FormComponent = () => {
    const {books,setBooks,addBook} = useContext(indexContext);
    const [tituloInput,setTituloInput] = useState('');
    const [autorInput,setAutorInput] = useState('');
    const [imagenInput,setImagenInput] = useState('');
    const [sinopsisInput,setSinopsisInput] = useState('');
    const [completadoInput,setCompletadoInput] = useState(0);
    const [reviewInput,setReviewInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        addBook({
            titulo: tituloInput,
            autor: autorInput,
            imagen: imagenInput,
            sinopsis: sinopsisInput,
            completado : completadoInput,
            review: reviewInput
        })
        setTituloInput('');
        setAutorInput('');
        setSinopsisInput('');
        setCompletadoInput('');
        setReviewInput('');
        console.log("Libro agregado!");
        navigate("/");
    } 
    const handleChangeFile = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = ()=>{
            setImagenInput(reader.result.toString());
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <label htmlFor="">Titulo</label>
                    <input type="text" className='form-control' 
                    value={tituloInput} onChange={(e)=>setTituloInput(e.target.value)}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">Autor</label>
                    <input type="text" className='form-control'
                    value={autorInput} onChange={(e)=>setAutorInput(e.target.value)}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">Seleccionar imagen</label>
                    <input type="file" name="" id="" className="form-control"
                    onChange={handleChangeFile}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">Sinopsis</label>
                    <input type="text" name="" id="" className='form-control'
                    value={sinopsisInput} onChange={(e)=>setSinopsisInput(e.target.value)}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="" className='form-check-label me-1'>Completado?</label>
                    <input type="checkbox" name="" id="" className='form-check-input'
                    value={completadoInput} onChange={(e)=>{(e.target.checked?setCompletadoInput(1):setCompletadoInput(0))}}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">Review</label>
                    <input type="text" name="" id="" className='form-control'
                    value={reviewInput} onChange={(e)=>setReviewInput(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-success w-100'>Registrar Libro</button>
            </form>
        </div>
    );
}

export default FormComponent;
