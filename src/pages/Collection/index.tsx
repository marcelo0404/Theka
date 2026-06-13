import { useState, useEffect } from 'react';
import styles from './Collection.module.css';
import searchIcon from '../../assets/MagnifyingGlass.svg';
import arrow from '../../assets/VectorPink.svg';
import cover from '../../assets/CAPA.png';
import cover10 from '../../assets/CAPA-9.png';
import cover11 from '../../assets/CAPA-10.png';
import cover12 from '../../assets/CAPA-11.png';
import cover13 from '../../assets/CAPA-12.png';
import cover14 from '../../assets/CAPA-13.png';
import { getLivros, Livro } from '../../services/books-api';

const API_BASE_URL = 'https://thekaapideploy2.pythonanywhere.com';

function getLivroImagemSrc(livro: Livro): string {
  const anyLivro = livro as Record<string, any>;

  const candidate =
    anyLivro.imagem ||
    anyLivro.capa ||
    anyLivro.thumbnail ||
    anyLivro.cover ||
    anyLivro.image ||
    anyLivro.image_url ||
    anyLivro.imageUrl ||
    anyLivro.imagem_url ||
    anyLivro.img;

  if (!candidate || typeof candidate !== 'string') return cover;

  // Se a API devolver caminho relativo, prefixa com a base da API
  if (candidate.startsWith('http://') || candidate.startsWith('https://')) return candidate;
  if (candidate.startsWith('/')) return `${API_BASE_URL}${candidate}`;

  // fallback: considera que é um path relativo sem leading slash
  return `${API_BASE_URL}/${candidate}`;
}

export function Collection() {

  const [livros, setLivros] = useState<Livro[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Carregar livros da API
  useEffect(() => {
    const fetchLivros = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getLivros(currentPage);
        setLivros(response.results);
        // Calcular total de páginas (assumindo 15 itens por página baseado no layout)
        const pages = Math.ceil(response.count / 15);
        setTotalPages(pages);
      } catch (err) {
        console.error('Erro ao carregar livros:', err);
        setError('Erro ao carregar livros. Tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLivros();
  }, [currentPage]);

  const handleSearch = () => {
    // TODO: Implementar busca
    console.log('Buscar por:', searchTerm);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div className={styles.pageContainer}>
      <section className={styles.novidades}>
        <div className={styles.novidadesText}>
          <h1>Novidades da semana</h1>
          <div className={styles.destaqueInfo}>
            <h3>A cabeça do santo</h3>
            <p>Socorro Acioli - 2014</p>
          </div>
        </div>
        <div className={styles.carrosselNovidades}>
          <img  className={styles.capaDestaque} src={cover14} alt="Capa do livro" />
          <img className={styles.capaMini} src={cover12} alt="Capa do livro" />
          <img className={styles.capaMini} src={cover11} alt="Capa do livro" />
          <img className={styles.capaMini} src={cover10} alt="Capa do livro" />
          <img className={styles.capaMini} src={cover13} alt="Capa do livro" />
        </div>
      </section>

      <section className={styles.catalogo}>
        <h2>Veja nosso catálogo</h2>

        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Fazer busca" 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className={styles.selectFilter}>
            <option>Gênero</option>
          </select>
          <select className={styles.selectFilter}>
            <option>Editora</option>
          </select>
          <button className={styles.searchBtn} onClick={handleSearch}>
            Buscar <img src={searchIcon} alt="" />
          </button>
        </div>

        {error && (
          <div style={{
            padding: '16px',
            marginBottom: '16px',
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: '4px',
            color: '#c33',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {isLoading ? (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            color: '#999'
          }}>
            Carregando livros...
          </div>
        ) : (
          <>
            <div className={styles.bookGrid}>
              {livros.length > 0 ? (
                livros.map((livro) => (
                  <div 
                    key={livro.id} 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = 'scale(1)';
                    }}
                  >
                    <img 
                      src={getLivroImagemSrc(livro)} 
                      alt={livro.titulo} 

                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px'
                      }}
                    />
                    <h4 style={{
                      marginTop: '8px',
                      fontSize: '14px',
                      textAlign: 'center',
                      maxWidth: '100%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {livro.titulo}
                    </h4>
                    {livro.autor && (
                      <p style={{
                        fontSize: '12px',
                        color: '#666',
                        margin: '4px 0',
                        textAlign: 'center'
                      }}>
                        {livro.autor}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
                  Nenhum livro encontrado
                </div>
              )}
            </div>

            <div className={styles.pagination}>
              <button 
                className={styles.pageArrow}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <img src={arrow} alt="prev" />
              </button>
              {Array.from({ length: Math.min(3, totalPages) }).map((_, i) => (
                <span 
                  key={i + 1}
                  className={`${styles.pageNum} ${currentPage === i + 1 ? styles.activePage : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                  style={{ cursor: 'pointer' }}
                >
                  {i + 1}
                </span>
              ))}
              <button 
                className={styles.pageArrow2}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <img src={arrow} alt="next" />
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}