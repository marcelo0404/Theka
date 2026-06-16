const API_BASE_URL = 'https://thekaapi3.pythonanywhere.com/';


export interface EmailTokenObtainPair {
  access: string;
  refresh: string;
}

export interface User {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  username?: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user?: User;
}


const getHeaders = (includeAuth = true) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (includeAuth) {
    const token = localStorage.getItem('authToken');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};


export const loginUser = async (email: string, password: string): Promise<EmailTokenObtainPair> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/token/`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || error.message || 'Erro ao fazer login');
    }

    const data: EmailTokenObtainPair = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


export const registerUser = async (email: string, password: string, first_name?: string, last_name?: string) => {
  try {
    const username = first_name 
      ? first_name.toLowerCase().replace(/\s+/g, '')
      : email.split('@')[0].toLowerCase();

    const response = await fetch(`${API_BASE_URL}/users/`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({
        email,
        password,
        password_confirm: password,
        username,
        first_name,
        last_name,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      
      
      if (error.email && Array.isArray(error.email) && error.email[0]) {
        throw new Error(error.email[0]);
      }
      
      
      if (error.password && Array.isArray(error.password) && error.password[0]) {
        throw new Error(error.password[0]);
      }
      
      
      if (error.username && Array.isArray(error.username) && error.username[0]) {
        throw new Error(error.username[0]);
      }
      
      throw new Error(error.detail || error.message || 'Erro ao registrar');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


export const logoutUser = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
};


export const getCurrentUser = async (userId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error('Erro ao obter dados do usuário');
    }

    const data: User = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


export const refreshAuthToken = async (refreshToken: string): Promise<{ access: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/token/refresh/`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Erro ao renovar token');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const requestPasswordReset = async (email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/password/reset/`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || error.message || 'Erro ao solicitar reset de senha');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const confirmPasswordReset = async (uid: string, token: string, new_password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/password/reset/confirm/`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({ uid, token, new_password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || error.message || 'Erro ao resetar senha');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
