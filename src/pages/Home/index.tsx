import styles from './Home.module.css';
import logo from '../../assets/LOGOTIPOGREEN.png';
import Img from '../../assets/MASCOTEOG.png'; 
import book from '../../assets/livro 1.png'; 
import book2 from '../../assets/livro 2.png';
import book3 from '../../assets/livro 3.png';
import arrowGreen from '../../assets/ArrowCircleRightGreen.svg';
import arrowOrange from '../../assets/ArrowCircleRightOrange.svg';
import arrowRed from '../../assets/ArrowCircleRightRed.svg';
import person from '../../assets/PersonRed.svg';
import bookicon from '../../assets/bookRed.svg';


export function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <img src={Img} alt="Banner Theka" className={styles.Image} />
          <div className={styles.bannerText}>
            <img src={logo} alt="Theka Logo" className={styles.logo} />
            <p>Desvende o mundo através dos livros.</p>
            <button className={styles.acervoBtn}>Acervo</button>
          </div>
        </div>
      </section>

      <section className={styles.highlightSection}>
        <div className={styles.highlightText}>
          <img src={arrowRed} alt="Seta para direita" className={styles.arrowIconTop} />
          <h2>Nós te ajudamos a conhecer os livros de uma forma diferente.</h2>
          <p>
            Todo mês a gente separa livros especiais para você se inspirar, 
            aprender ou se divertir. Pode ser novidade, clássico ou surpresa,
             sempre tem uma leitura esperando por você!
          </p>
          <div className={styles.highlightButtons}>
            <button className={styles.outlineBtn}>Veja os destaques da semana 
              <img src={arrowRed} alt="Seta para direita" className={styles.arrowIcon} />
            </button>
            <button className={styles.outlineBtn}>Acesse nosso acervo completo 
              <img src={arrowRed} alt="Seta para direita" className={styles.arrowIcon} />
            </button>
          </div>
        </div>

        <div className={styles.bookStack}>
          <div className={styles.mainBook}>
            <img src={book} alt="Os sete maridos de Evelyn Hugo" className={styles.bookImage} />
            <img src={book2} alt="Livro 2" className={styles.bookImage2} />
            <img src={book3} alt="Livro 3" className={styles.bookImage3} />
          </div>
        </div>
      </section>


      <section className={styles.statsSection}>
        <h2>Nossas estatísticas</h2>
        <div className={styles.statsGrid}>
          <div className={styles.greenCard}>
            <div className={styles.cut}></div>
            <img src={arrowGreen} alt="Seta para cima" className={styles.statArrow} />
            <h3>15%</h3>
            <p>Aumento do acervo esse mês</p>
          </div>
          <div className={styles.orangeCard}>
            <div className={styles.cut}></div>
            <img src={arrowOrange} alt="Seta para cima" className={styles.statArrow} />
            <h3>23%</h3>
            <p>Aumento dos empréstimos</p>
          </div>
          <div className={styles.pinkCard}>
            <img src={person} alt="Pessoa" className={styles.person}/>
            <h3>487</h3>
            <p>Usuários cadastrados</p>
          </div>
          <div className={styles.pinkCard}>
            <img src={bookicon} alt="book" className={styles.bookicon}/>
            <h3>3.982</h3>
            <p>Materiais no catálogo</p>
          </div>
          <div className={styles.pinkCard}>
            <img src={bookicon} alt="book" className={styles.bookicon}/>
            <h3>2.758</h3>
            <p>Títulos cadastrados</p>
          </div>
        </div>
      </section>
    </div>
  );
}