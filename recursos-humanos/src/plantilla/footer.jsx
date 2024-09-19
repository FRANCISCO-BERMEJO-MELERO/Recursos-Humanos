import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 mt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                        <h4 className="text-xl font-bold">Sistema de Recursos Humanos</h4>
                        <p className="mt-2">Gestionando el talento de tu empresa</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                        <p>&copy; 2024 Todos los derechos reservados</p>
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                        <p>Desarrollado por Francisco Bermejo Melero</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
