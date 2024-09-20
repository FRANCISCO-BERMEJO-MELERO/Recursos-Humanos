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
        <div className='container mx-auto px-4 py-8 '>
            <div className='text-center mb-10'>
                <h3 className='text-5xl font-bold text-indigo-700 mb-4'>Sistema de Recursos Humanos</h3>
            </div>
            <div className=' rounded-lg overflow-hidden'>
                <table className="w-full table-auto h-52">
                    <thead className='bg-indigo-600 text-white'>
                        <tr className='h-12'>
                            <th className='px-4 py-3 text-center'>ID</th>
                            <th className='px-4 py-3 text-center'>Empleado</th>
                            <th className='px-4 py-3 text-center'>Departamento</th>
                            <th className='px-4 py-3 text-center'>Sueldo</th>
                            <th className='px-4 py-3 text-center'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-center overflow-y-auto overflow-hidden'>
                        {Empleados.map((empleado, indice) => (
                            <tr key={indice} className={indice % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className='px-4 py-3 text-center '>{empleado.idEmpleado}</td>
                                <td className='px-4 py-3 text-center '>{empleado.nombre}</td>
                                <td className='px-4 py-3 text-center '>{empleado.departamento}</td>
                                <td className='px-4 py-3 text-center '>
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
                                        className="inline-block bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition duration-300 mr-2"
                                    >
                                        <i className="bi bi-pencil-fill mr-1"></i>
                                    </Link>
                                    <button 
                                        onClick={() => eliminarEmpleado(empleado.idEmpleado)} 
                                        className="inline-block bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition duration-300">
                                        <i className="bi bi-trash-fill mr-1"></i>
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
