import styles from './Footer.module.css';
import logoWhite from '../../assets/LOGOTIPOPINK.png';
import iconPhone from '../../assets/DeviceMobileCamera.svg';
import iconWeb from '../../assets/GlobeSimple.svg';
import iconMap from '../../assets/MapPinArea.svg';
import iconInsta from '../../assets/InstagramLogo.svg';
import iconTiktok from '../../assets/TiktokLogo.svg';
import iconX from '../../assets/XLogo.svg';
import iconHelp from '../../assets/Info.svg';
import iconFaq from '../../assets/Question.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandColumn}>
          <img src={logoWhite} alt="Theka Logo" className={styles.logo} />
        </div>

        <div className={styles.spacer}>
          <div className={styles.column}>
            <h3>Contato</h3>
            <ul className={styles.contactList}>
              <li><img className={styles.contactIcon} src={iconPhone} alt="" /> (84) 9 9999-2222</li>
              <li><img className={styles.contactIcon} src={iconWeb} alt="" /> www.theka.com.br</li>
              <li><img className={styles.contactIcon} src={iconMap} alt="" /> Natal, RN</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Redes sociais</h3>
            <ul className={styles.socialList}>
              <li><img className={styles.socialIcon} src={iconInsta} alt="" /> @theka.biblioteca</li>
              <li><img className={styles.socialIcon} src={iconTiktok} alt="" /> @theka.biblioteca</li>
              <li><img className={styles.socialIcon} src={iconX} alt="" /> @theka.biblioteca</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Ajuda</h3>
            <ul className={styles.helpList}>
              <li><img className={styles.helpIcon} src={iconHelp} alt="" /> Central de ajuda</li>
              <li><img className={styles.helpIcon} src={iconFaq} alt="" /> FAQ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Mockup desenvolvido por EJECT</p>
      </div>
    </footer>
  );
}