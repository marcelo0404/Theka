import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Register.module.css';
import logo from '../../assets/LOGOTIPO.svg';
import personIllustration from '../../assets/MASCOTE.png';
import eye from '../../assets/Eye.svg';

export function Register() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, error, clearError } = useAuth();
  const navigate = useNavigate();

  // Validar requisitos de senha
  const validatePassword = (pwd: string) => {
    return {
      hasUpperCase: /[A-Z]/.test(pwd),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd),
      hasMinLength: pwd.length >= 6
    };
  };

  const passwordRequirements = validatePassword(password);
  const isPasswordValid = passwordRequirements.hasUpperCase && 
                         passwordRequirements.hasSpecialChar && 
                         passwordRequirements.hasMinLength;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validações
    if (!firstName || !email || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não correspondem');
      return;
    }

    if (!isPasswordValid) {
      alert('A senha deve ter pelo menos 6 caracteres, 1 letra maiúscula e 1 caractere especial');
      return;
    }

    try {
      setIsLoading(true);
      clearError();
      await register(email, password, firstName);
      // Após registro bem-sucedido, redirecionar para home ou login
      navigate('/'); 
    } catch (err) {
      console.error('Erro no registro:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        <div className={styles.registerCard}>
          <h1 className={styles.title}>Cadastro</h1>
          
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
              <label>Nome completo</label>
              <input 
                type="text" 
                placeholder="Seu nome completo"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isLoading}
              />
            </div>

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
              {password && (
                <div style={{ marginTop: '8px', fontSize: '12px' }}>
                  <div style={{ color: passwordRequirements.hasMinLength ? '#4CAF50' : '#ccc' }}>
                    ✓ Mínimo 6 caracteres
                  </div>
                  <div style={{ color: passwordRequirements.hasUpperCase ? '#4CAF50' : '#ccc' }}>
                    ✓ Pelo menos 1 letra maiúscula
                  </div>
                  <div style={{ color: passwordRequirements.hasSpecialChar ? '#4CAF50' : '#ccc' }}>
                    ✓ Pelo menos 1 caractere especial (!@#$%^&*)
                  </div>
                </div>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>Confirmar senha</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
                <img 
                  src={eye} 
                  alt="Mostrar senha" 
                  className={styles.eyeIcon}
                  onClick={toggleConfirmPasswordVisibility}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <Link to="/login" className={styles.cancelBtn}>Cancelar</Link>
              <button 
                type="submit" 
                className={styles.saveBtn}
                disabled={isLoading}
              >
                {isLoading ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}