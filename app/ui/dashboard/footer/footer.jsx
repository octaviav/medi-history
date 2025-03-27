import Link from 'next/link';
import styles from './footer.module.css';
import { 
  MdCopyright, 
  MdFavorite, 
  MdPrivacyTip 
} from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>aba.da.la</div>
          <p className={styles.tagline}>Healthcare Made Simple</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h4>Quick Links</h4>
            <Link href="/dashboard" className={styles.footerLink}>Dashboard</Link>
            <Link href="/about" className={styles.footerLink}>About Us</Link>
            <Link href="/contact" className={styles.footerLink}>Contact</Link>
          </div>
          <div className={styles.linkColumn}>
            <h4>Legal</h4>
            <Link href="/privacy" className={styles.footerLink}>
              <MdPrivacyTip /> Privacy Policy
            </Link>
            <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
          </div>
        </div>

        <div className={styles.legal}>
          <div className={styles.text}>
            <MdCopyright /> {currentYear} aba.da.la. All rights reserved.
          </div>
          <div className={styles.made}>
            Made with <MdFavorite className={styles.heartIcon} /> by Our Team
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer