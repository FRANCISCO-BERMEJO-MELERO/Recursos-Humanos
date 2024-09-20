import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="mx-auto w-full">
            <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg p-4 fixed top-0 left-0 right-0 z-50 max-w-screen-lg mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Sistema de Recursos Humanos</span>
                    </div>
                    <div className="block lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menú</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} md:flex lg:items-center lg:w-auto`}>
                        <div className="text-sm lg:flex-grow flex justify-center">
                            <Link to="/" className="block lg:inline-block text-white hover:scale-110  text-xl p-2 rounded transition duration-300 mx-2">
                                Inicio
                            </Link>
                            <Link to="/agregar" className="block lg:inline-block text-white  hover:scale-110 text-xl p-2 rounded transition duration-300 mx-2">
                                Agregar empleado
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navegacion;
