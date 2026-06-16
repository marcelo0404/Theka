import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { loginUser, registerUser, logoutUser, User } from '../services/api';

export interface AuthContextType {
  user: User | null;
  userId: number | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, first_name?: string, last_name?: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Verificar se há token salvo ao carregar a aplicação
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('authToken');
      const savedUser = localStorage.getItem('user');
      const savedUserId = localStorage.getItem('userId');

      if (token && savedUser && savedUserId) {
        try {
          setUser(JSON.parse(savedUser));
          setUserId(Number(savedUserId));
        } catch (err) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('user');
          localStorage.removeItem('userId');
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await loginUser(email, password);
      
      // Salvar tokens
      localStorage.setItem('authToken', response.access);
      localStorage.setItem('refreshToken', response.refresh);

      // Para obter dados do user completo, poderia fazer uma requisição adicional
      // Por enquanto, vai guardar apenas o email
      const userData: User = {
        id: 0, // precisa atualizar depois
        email,
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao fazer login';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, first_name?: string, last_name?: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await registerUser(email, password, first_name, last_name);

      // Após registro bem-sucedido, fazer login automaticamente
      if (response.id) {
        // Salvar dados do usuário
        const userData: User = {
          id: response.id,
          email: response.email,
          first_name: response.first_name,
          last_name: response.last_name,
        };
        
        setUser(userData);
        setUserId(response.id);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userId', response.id.toString());

        // Fazer login automaticamente para obter tokens
        try {
          const loginResponse = await loginUser(email, password);
          localStorage.setItem('authToken', loginResponse.access);
          localStorage.setItem('refreshToken', loginResponse.refresh);
        } catch (loginErr) {
          // Se auto-login falhar, pelo menos o usuário foi criado
          console.error('Erro ao fazer auto-login:', loginErr);
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao registrar';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setUserId(null);
    setError(null);
    logoutUser();
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userId,
        isAuthenticated: !!user && !!localStorage.getItem('authToken'),
        isLoading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
