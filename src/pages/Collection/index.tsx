import styles from './Collection.module.css';
import searchIcon from '../../assets/MagnifyingGlass.svg';
import arrow from '../../assets/VectorPink.svg';
// import plus from '../../assets/Plus.svg'; 
import cover from '../../assets/CAPA.png';
import cover2 from '../../assets/CAPA-1.png';
import cover3 from '../../assets/CAPA-2.png';
import cover4 from '../../assets/CAPA-3.png';
import cover5 from '../../assets/CAPA-4.png';
import cover6 from '../../assets/CAPA-5.png';
import cover7 from '../../assets/CAPA-6.png';
import cover8 from '../../assets/CAPA-7.png';
import cover9 from '../../assets/CAPA-8.png';
import cover10 from '../../assets/CAPA-9.png';
import cover11 from '../../assets/CAPA-10.png';
import cover12 from '../../assets/CAPA-11.png';
import cover13 from '../../assets/CAPA-12.png';
import cover14 from '../../assets/CAPA-13.png';
import cover15 from '../../assets/CAPA-14.png';

export function Collection() {
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
          <input type="text" placeholder="Fazer busca" className={styles.searchInput} />
          <select className={styles.selectFilter}>
            <option>Gênero</option>
          </select>
          <select className={styles.selectFilter}>
            <option>Editora</option>
          </select>
          <button className={styles.searchBtn}>
            Buscar <img src={searchIcon} alt="" />
          </button>
        </div>

        <div className={styles.bookGrid}>
          <img src={cover} alt="Capa do livro" />
          <img src={cover2} alt="Capa do livro" />
          <img src={cover3} alt="Capa do livro" />
          <img src={cover4} alt="Capa do livro" />
          <img src={cover5} alt="Capa do livro" />
          <img src={cover6} alt="Capa do livro" />
          <img src={cover7} alt="Capa do livro" />
          <img src={cover8} alt="Capa do livro" />
          <img src={cover9} alt="Capa do livro" />
          <img src={cover10} alt="Capa do livro" />
          <img src={cover11} alt="Capa do livro" />
          <img src={cover12} alt="Capa do livro" />
          <img src={cover13} alt="Capa do livro" />
          <img src={cover14} alt="Capa do livro" />
          <img src={cover15} alt="Capa do livro" />
        </div>

        <div className={styles.pagination}>
          <button className={styles.pageArrow}><img src={arrow} alt="prev" /></button>
          <span className={styles.pageNum}>1</span>
          <span className={`${styles.pageNum} ${styles.activePage}`}>2</span>
          <span className={styles.pageNum}>3</span>
          <button className={styles.pageArrow2}><img src={arrow} alt="next" /></button>
        </div>
      </section>
    </div>
  );
}