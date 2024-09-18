import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

const ListadoEmpleados = () => {
    const urlBase = "http://localhost:8080/rh-app/empleados"
    const [Empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const data = await axios.get(urlBase)
        console.log(data.data)
        setEmpleados(data.data)
    }

    const eliminarEmpleado = async (id) => {
        await axios.delete(`${urlBase}/${id}`)
        cargarEmpleados();
    }

    return (
        <div className='container mx-auto px-4 py-8 bg-gradient-to-r from-blue-100 to-purple-100'>
            <div className='text-center mb-10'>
                <h3 className='text-5xl font-bold text-indigo-700 mb-4'>Sistema de Recursos Humanos</h3>
                <p className='text-gray-600'>Listado de empleados</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <table className="w-full table-auto">
                    <thead className='bg-indigo-600 text-white'>
                        <tr>
                            <th className='px-4 py-3'>ID</th>
                            <th className='px-4 py-3'>Empleado</th>
                            <th className='px-4 py-3'>Departamento</th>
                            <th className='px-4 py-3'>Sueldo</th>
                            <th className='px-4 py-3'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Empleados.map((empleado, indice) => (
                            <tr key={indice} className={indice % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className='px-4 py-3 text-center'>{empleado.idEmpleado}</td>
                                <td className='px-4 py-3'>{empleado.nombre}</td>
                                <td className='px-4 py-3'>{empleado.departamento}</td>
                                <td className='px-4 py-3'>
                                    <NumericFormat 
                                        value={empleado.sueldo} 
                                        displayType={'text'} 
                                        thousandSeparator=',' 
                                        suffix='€' 
                                        decimalScale={2} 
                                        fixedDecimalScale 
                                    />
                                </td>
                                <td className='px-4 py-3 text-center'>
                                    <Link 
                                        to={`/editar/${empleado.idEmpleado}`} 
                                        className="inline-block bg-yellow-400 text-white rounded-full p-2 hover:bg-yellow-500 transition duration-300 mr-2"
                                    >
                                        <i className="bi bi-pencil-fill"></i>
                                    </Link>
                                    <button 
                                        onClick={() => eliminarEmpleado(empleado.idEmpleado)} 
                                        className="inline-block bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition duration-300"
                                    >
                                        <i className="bi bi-x"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListadoEmpleados;
