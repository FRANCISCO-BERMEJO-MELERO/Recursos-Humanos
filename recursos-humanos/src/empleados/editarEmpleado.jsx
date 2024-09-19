import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditarEmpleado = () => {
    const navegacion = useNavigate(); 
    const urlBase = "http://localhost:8080/rh-app/empleados";

    const {id} = useParams();

    const [empleado, setEmpledo] = useState({
        nombre: '',
        departamento: '',
        sueldo: ""
    });
    const {nombre, departamento, sueldo} = empleado

    useEffect(() => {
        cargarEmpleado();
    },[]);
    
    const cargarEmpleado = async () =>{
        const resultado = await axios.get(`${urlBase}/${id}`)
        setEmpledo(resultado.data);
    }

    const onInputChange = (e) => {
        //spreed operatos ...
        setEmpledo({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empleado)
        navegacion('/');
    }

    return (
        <div className='container mx-auto px-4 py-8 bg-gradient-to-r from-blue-100 to-purple-100'>
            <div className='text-center mb-10'>
                <h3 className='text-5xl font-bold text-indigo-700 mb-4'>Editar Empleado</h3>
                <p className='text-gray-600'>Modifique los datos del empleado</p>
            </div>
            <form className='max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8' onSubmit={(e) => onSubmit(e)}>
                <div className="mb-6">
                    <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" name='nombre' value={nombre} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="departamento" className="block text-gray-700 text-sm font-bold mb-2">Departamento</label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="departamento" name='departamento' value={departamento} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="sueldo" className="block text-gray-700 text-sm font-bold mb-2">Sueldo</label>
                    <input type="number" step="any" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sueldo" name='sueldo' value={sueldo} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='flex justify-between items-center'>
                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">Guardar</button>
                    <a href='/' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300'>Regresar</a>
                </div>
            </form>
        </div>
    );
}

export default EditarEmpleado;
