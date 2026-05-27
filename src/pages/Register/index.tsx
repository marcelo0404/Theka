import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import logo from '../../assets/LOGOTIPO.svg';
import personIllustration from '../../assets/MASCOTE.png';
import eye from '../../assets/Eye.svg';

export function Register() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <img src={personIllustration} alt="Ilustração" className={styles.illustration} />
        <div className={styles.brand}>
          <img src={logo} alt="Theka" />
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.registerCard}>
          <h1 className={styles.title}>Cadastro</h1>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Nome completo</label>
              <input type="text" placeholder="Seu nome completo" />
            </div>

            <div className={styles.inputGroup}>
              <label>E-mail</label>
              <input type="email" placeholder="seuemail@email.com" />
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <div className={styles.passwordWrapper}>
                <input type="password" placeholder="********" />
                <img src={eye} alt="Mostrar senha" className={styles.eyeIcon} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Confirmar senha</label>
              <div className={styles.passwordWrapper}>
                <input type="password" placeholder="********" />
                <img src={eye} alt="Mostrar senha" className={styles.eyeIcon} />
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <Link to="/login" className={styles.cancelBtn}>Cancelar</Link>
              <button type="submit" className={styles.saveBtn}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}