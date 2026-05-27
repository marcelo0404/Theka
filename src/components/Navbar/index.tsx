import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoIcon from '../../assets/LOGOTIPO (1).svg'; 
import profileIcon from '../../assets/UserCircle.svg';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>  
        <div className={styles.logoBall}>
            <img src={logoIcon} alt="Theka Icon" />
          </div> 

        <div className={styles.menu}>
          
          <ul className={styles.navLinks}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className={({ isActive }) => isActive ? styles.active : ''}>
                Acervo
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
                Sobre nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
                Contato
              </NavLink>
            </li>
          </ul>
          
          <div className={styles.profileWrapper}>
            <img src={profileIcon} alt="Perfil" className={styles.iconImg} />
          </div>
        </div>
      </div>
    </nav>
  );
}