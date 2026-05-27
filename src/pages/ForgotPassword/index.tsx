import { Link } from 'react-router-dom';
import styles from './Forgot.module.css';
import { useState } from 'react';
import logo from '../../assets/LOGOTIPO.svg';
import personIllustration from '../../assets/MASCOTE.png';


export function ForgotPassword() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <img src={personIllustration} alt="Mascote" className={styles.illustration} />
        <div className={styles.brand}>
          <img src={logo} alt="Theka" />
        </div>
      </div>

      {showSuccess && (
        <div className={styles.successAlert}>
          <div className={styles.iconBox}>
            <span>💬</span> 
          </div>
          <p className={styles.message}>
            Enviamos uma mensagem de recuperação de senha para o seu E-mail.
          </p>
        </div>
      )}

      <div className={styles.rightSide}>
        <div className={styles.card}>
          <h1 className={styles.title}>Recuperar senha</h1>
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>E-mail</label>
              <input type="email" placeholder="seuemail@email.com" required />
            </div>
            
            <div className={styles.buttonGroup}>
              <Link to="/login" className={styles.backBtn}>Voltar</Link>
              <button type="submit" className={styles.sendBtn}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}