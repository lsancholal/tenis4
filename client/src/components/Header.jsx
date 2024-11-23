import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();  
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">
            Tenis Landia
          </h1>
        </div>

        <nav className={`space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
            Home
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
            Produtos
          </Link>
          <Link to="/cart" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
            Carrinho
          </Link>

          {user ? (
            <>
              <span className="text-white">{user.name}</span>
              <button
                onClick={logout}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Cadastrar
              </Link>
            </>
          )}
        </nav>

        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;