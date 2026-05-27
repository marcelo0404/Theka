import styles from './About.module.css';
import headerIllustration from '../../assets/MASCOTEPY.png'; 
import historyGraphics from '../../assets/LOGOTIPO.svg'; 
import team1 from '../../assets/image 61.png';
import team2 from '../../assets/image 62.png';
import team3 from '../../assets/image 63.png';
import team4 from '../../assets/image 64.png';
import vectorA from '../../assets/VectorA.svg';
import vectorK from '../../assets/VectorK.svg';
import vectorE from '../../assets/VectorE.svg';

export function About() {
  const tags = [
    "Encontros culturais", "Troca de experiências", "Comunidade", 
    "Educação", "Aprendizado", "Acesso à informação"
  ];

  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={headerIllustration} alt="" className={styles.heroImg} />
          <div className={styles.heroText}>
            <h1>Theka</h1>
            <p>
              A <strong>Theka®</strong> é um espaço feito para conectar pessoas e histórias. 
              Aqui você encontra livros para todos os gostos, além de atividades...
            </p>
          </div>
        </div>
      </section>

  
      <div className={styles.tagsContainer}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

  
      <section className={styles.historySection}>
        <div className={styles.historyContent}>
          <h2>Nossa história</h2>
          <p>
            Tudo começou era apenas uma pequena coleção de livros reunidos com carinho...
          </p>
          <p>
            Hoje, além de guardar histórias nas estantes, também faz parte da história de quem passa por aqui...
          </p>
        </div>
        <img src={historyGraphics} alt="" className={styles.historyImg} />
      </section>

      <section className={styles.valuesSection}>
        <h2>Nossos valores</h2>
        <div className={styles.valuesGrid}>
          <div className={`${styles.valueCard} ${styles.orange}`}>
            <span>Acesso para todos</span>
            <img src={vectorE} alt="" className={styles.vectorIcon} />
          </div>
          <div className={`${styles.valueCard} ${styles.green}`}>
            <span>Amor pela leitura</span>
            <img src={vectorK} alt="" className={styles.vectorIcon} />
          </div>
          <div className={`${styles.valueCard} ${styles.pink}`}>
            <span>Comunidade e troca</span>
            <img src={vectorA} alt="" className={styles.vectorIcon} />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Nossa equipe</h2>
        <div className={styles.teamGrid}>
          <div className={styles.memberCard}>
            <img src={team2} alt="Maria Maria" />
            <span className={styles.memberName}>Maria Maria</span>
          </div>
          <div className={styles.memberCard2}>
            <img src={team4} alt="Julia Maria" />
            <span className={styles.memberName}>Julia Maria</span>
          </div>
          <div className={styles.memberCard3}>
            <img src={team1} alt="Jeniffer Oliveira" />
            <span className={styles.memberName}>Jeniffer Oliveira</span>
          </div>
          <div className={styles.memberCard4}>
            <img src={team3} alt="Josivaldo Lopes" />
            <span className={styles.memberName}>Josivaldo Lopes</span>
          </div>
        </div>
      </section>
    </div>
  );
}