import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.module.css';
import logo from '../../assets/LOGOTIPO.svg';
import personIllustration from '../../assets/MASCOTE.png'; 
import eye from '../../assets/Eye.svg';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      setIsLoading(true);
      clearError();
      await login(email, password);
      navigate('/'); // Redirecionar para home após login bem-sucedido
    } catch (err) {
      console.error('Erro no login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          
          {error && (
            <div style={{
              padding: '12px',
              marginBottom: '16px',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '4px',
              color: '#c33',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>E-mail</label>
              <input 
                type="email" 
                placeholder="seuemail@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <img 
                  src={eye} 
                  alt="Mostrar senha" 
                  className={styles.eyeIcon}
                  onClick={togglePasswordVisibility}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div className={styles.extraLinks}>
              <Link to="/forgot-password">Esqueceu a senha?</Link>
              <Link to="/register">Ainda não tem cadastro?</Link>
            </div>

            <button 
              type="submit" 
              className={styles.loginBtn}
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}