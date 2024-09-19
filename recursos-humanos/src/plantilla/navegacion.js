import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (
        <div className='container'> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary container mx-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-white font-bold text-2xl" href="/">Sistema de Recursos Humanos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/agregar">Agregar empleado</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navegacion;
