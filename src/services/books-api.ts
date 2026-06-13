const API_BASE_URL = 'https://thekaapideploy2.pythonanywhere.com';

// ====== TIPOS ======
export interface Livro {
  id: number;
  titulo: string;
  autor?: string;
  genero_id?: number;
  editora_id?: number;
  ano?: number;
  descricao?: string;
  [key: string]: any;
}

export interface Genero {
  id: number;
  nome: string;
  descricao?: string;
  [key: string]: any;
}

export interface Editora {
  id: number;
  nome: string;
  website?: string;
  [key: string]: any;
}

// ====== HEADER HELPER ======
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

// ====== LIVROS ======
export const getLivros = async (page?: number): Promise<{ count: number; results: Livro[] }> => {
  try {
    const url = new URL(`${API_BASE_URL}/livros/`);
    if (page) url.searchParams.append('page', page.toString());
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar livros: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    throw error;
  }
};

export const getLivroById = async (id: number): Promise<Livro> => {
  try {
    const response = await fetch(`${API_BASE_URL}/livros/${id}/`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar livro: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar livro:', error);
    throw error;
  }
};

export const criarLivro = async (livro: Omit<Livro, 'id'>): Promise<Livro> => {
  try {
    const response = await fetch(`${API_BASE_URL}/livros/`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(livro),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `Erro ao criar livro: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao criar livro:', error);
    throw error;
  }
};

export const atualizarLivro = async (id: number, livro: Partial<Livro>): Promise<Livro> => {
  try {
    const response = await fetch(`${API_BASE_URL}/livros/${id}/`, {
      method: 'PUT',
      headers: getHeaders(true),
      body: JSON.stringify(livro),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar livro: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    throw error;
  }
};

export const deletarLivro = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_BASE_URL}/livros/${id}/`, {
      method: 'DELETE',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar livro: ${response.status}`);
    }
  } catch (error) {
    console.error('Erro ao deletar livro:', error);
    throw error;
  }
};

// ====== GÊNEROS ======
export const getGeneros = async (page?: number): Promise<{ count: number; results: Genero[] }> => {
  try {
    const url = new URL(`${API_BASE_URL}/generos/`);
    if (page) url.searchParams.append('page', page.toString());
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar gêneros: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar gêneros:', error);
    throw error;
  }
};

export const getGeneroById = async (id: number): Promise<Genero> => {
  try {
    const response = await fetch(`${API_BASE_URL}/generos/${id}/`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar gênero: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar gênero:', error);
    throw error;
  }
};

export const criarGenero = async (genero: Omit<Genero, 'id'>): Promise<Genero> => {
  try {
    const response = await fetch(`${API_BASE_URL}/generos/`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(genero),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar gênero: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao criar gênero:', error);
    throw error;
  }
};

// ====== EDITORAS ======
export const getEditoras = async (page?: number): Promise<{ count: number; results: Editora[] }> => {
  try {
    const url = new URL(`${API_BASE_URL}/editoras/`);
    if (page) url.searchParams.append('page', page.toString());
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar editoras: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar editoras:', error);
    throw error;
  }
};

export const getEditoraById = async (id: number): Promise<Editora> => {
  try {
    const response = await fetch(`${API_BASE_URL}/editoras/${id}/`, {
      method: 'GET',
      headers: getHeaders(true),
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar editora: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar editora:', error);
    throw error;
  }
};

export const criarEditora = async (editora: Omit<Editora, 'id'>): Promise<Editora> => {
  try {
    const response = await fetch(`${API_BASE_URL}/editoras/`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(editora),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar editora: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao criar editora:', error);
    throw error;
  }
};
