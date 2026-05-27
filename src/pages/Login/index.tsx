import styles from './Login.module.css';
import logo from '../../assets/LOGOTIPO.svg';
import personIllustration from '../../assets/MASCOTE.png'; 
import { Link } from 'react-router-dom';
import eye from '../../assets/Eye.svg';

export function Login() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <img src={personIllustration} alt="Ilustração" className={styles.illustration} />
        <div className={styles.brand}>
          <img src={logo} alt="Theka" />
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Login</h1>
          
          <form className={styles.form}>
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

            <div className={styles.extraLinks}>
              <Link to="/forgot-password">Esqueceu a senha?</Link>
              <Link to="/register">Ainda não tem cadastro?</Link>
            </div>

            <button type="submit" className={styles.loginBtn}>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}