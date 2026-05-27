import { Link } from 'react-router-dom';
import styles from './Reset.module.css';
import logo from '../../assets/LOGOTIPO.svg';
import personIllustration from '../../assets/MASCOTE.png';

export function ResetPassword() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <img src={personIllustration} alt="Ilustração" className={styles.illustration} />
        <div className={styles.brand}><img src={logo} alt="Theka" /></div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.card}>
          <h1 className={styles.title}>Recuperar senha</h1>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Nova senha</label>
              <input type="password" placeholder="******" />
            </div>
            <div className={styles.inputGroup}>
              <label>Confirmar nova senha</label>
              <input type="password" placeholder="******" />
            </div>
            <div className={styles.buttonGroup}>
              <Link to="/forgot-password" className={styles.backBtn}>Voltar</Link>
              <button type="submit" className={styles.saveBtn}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}