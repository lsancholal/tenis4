import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';  // Para realizar chamadas HTTP (login, logout, etc.)

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(false);  

  const login = async (email, password) => {
    setLoading(true);
    try {
   
      const response = await axios.post('/api/auth/login', { email, password });
      const { token } = response.data;

      localStorage.setItem('token', token);

      const decodedUser = jwtDecode(token);
      setUser(decodedUser); 

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Erro ao fazer login:', error);
      throw new Error('Credenciais inválidas');
    }
  };

  const logout = () => {
    setUser(null);  
    localStorage.removeItem('token');  
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const jwtDecode = (token) => {
  if (!token) return null;
  const payload = token.split('.')[1];
  const decoded = JSON.parse(atob(payload));
  return decoded;
};