import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <section className={styles.navigation}>
      <div className={styles.logo}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoImg}>
            <img src="/logo-5rv.png" alt="5RV Logo" />
          </div>
          <div className={styles.logoText}>
            5RV<br/>Photography
          </div>
        </Link>
      </div>
      <div className={styles.navItems}>
        <Link href="/work" className={styles.menuItem}>Моята работа</Link>
        <Link href="/about" className={styles.menuItem}>За мен</Link>
        <Link href="/contact" className={styles.menuItem}>Контакти</Link>
      </div>
    </section>
  )
}