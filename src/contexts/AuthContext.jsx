import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AuthContext = createContext();

// 2. Criar o provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  
  const login = async (email, password) => {
    try {
      
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

      try {
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
        } else {
          console.error("Dados do usuário (incluindo ID) não recebidos do endpoint '/clientes/listar/email/'.");
          
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          setUser(null);
          return false;
        }

      } catch (profileError) {
        console.error("Erro ao buscar dados do perfil do usuário após login:", profileError);
       
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
       
        throw new Error("Erro ao carregar dados do perfil. Tente novamente.");
      }

    } catch (authError) {
      console.error("Erro na autenticação de login (verifique credenciais ou servidor):", authError);
      if (authError.response && authError.response.status === 401) {
        throw new Error("Credenciais inválidas. Verifique seu nome de usuário e senha.");
      } else if (authError.request) {
        throw new Error("Não foi possível conectar ao servidor. Verifique sua conexão de rede ou o status da API.");
      } else {
        throw new Error("Erro inesperado durante o login.");
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    console.log("Usuário deslogado.");
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
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};