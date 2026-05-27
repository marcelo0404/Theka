import styles from './Contact.module.css';
import mapImg from '../../assets/Mapnatal.png'; 
import sendIcon from '../../assets/PaperPlaneTilt.svg'; 

export function Contact() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.mainTitle}>Contato</h1>

      <div className={styles.contentCard}>
        <div className={styles.mapSection}>
          <div className={styles.mapWrapper}>
            <img src={mapImg} alt="Mapa de Natal" className={styles.mapImage} />
          </div>
          
          <div className={styles.unitButtons}>
            <button className={`${styles.unitBtn} ${styles.activeUnit}`}>
              Unidades Natal shopping
            </button>
            <button className={styles.unitBtn}>
              Unidades Midway
            </button>
          </div>
          
          <p className={styles.addressText}>
            Avenida Senador Salgado Filho, 2234, Av. das Brancas Dunas, 47 - Candelária, Natal - RN, 59064-900
          </p>
        </div>

        <div className={styles.formSection}>
          <h2>Vem falar com a gente!</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Seu nome</label>
              <input type="text" placeholder="Joao Mario" />
            </div>

            <div className={styles.inputGroup}>
              <label>Idade</label>
              <input type="number" placeholder="23" />
            </div>

            <div className={styles.inputGroup}>
              <label>E-mail</label>
              <input type="email" placeholder="joao.mario@gmail.com" />
            </div>

            <div className={styles.inputGroup}>
              <label>Mensagem</label>
              <textarea placeholder="Escreva a sua mensagem."></textarea>
            </div>

            <div className={styles.actionButtons}>
              <button type="button" className={styles.cancelBtn}>Cancelar</button>
              <button type="submit" className={styles.submitBtn}>
                Enviar <img src={sendIcon} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}