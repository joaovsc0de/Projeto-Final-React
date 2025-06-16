import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export const AuthContext = createContext();

// 2. Criar o provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  
  const login = async (email, password) => {
      
      const loginResponse = await axios.post('http://localhost:8080/login', {
        username: email, 
        password: password,
      });

      let token = loginResponse.headers.authorization;
      if (token && token.startsWith('Bearer ')) {
        token = token.substring(7); 
      } else {
        console.error("Token de autenticação não recebido no cabeçalho 'Authorization'.");
        return false; 
      }

      localStorage.setItem('authToken', token); 

        const userProfileResponse = await axios.get(`http://localhost:8080/clientes/listar/email/${email}`, {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });

        const userData = userProfileResponse.data; 
        
        if (userData && userData.id) {
          localStorage.setItem('user', JSON.stringify(userData)); 
          setUser(userData); 
          console.log("Login bem-sucedido e perfil carregado! Usuário:", userData);
          return true; 
              } 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    console.log("Usuário deslogado.");
    
  };

  const updateUserContext = (newUserData) => {
    setUser(newUserData);
    localStorage.setItem('user', JSON.stringify(newUserData)); 
    console.log("Dados do usuário no contexto atualizados:", newUserData);
  };

  useEffect(() => {
    const storedAuthToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedAuthToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error("Erro ao parsear dados do usuário do localStorage:", e);
        logout(); 
      }
    }
    setLoading(false); 
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, updateUserContext }}>
      {children}
    </AuthContext.Provider>
  );
};