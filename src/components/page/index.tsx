import Navigation from "@/components/navigation";

import styles from './page.module.css';

export default function Page({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.page}>
      <header className={styles.navigationWrap}>
        <Navigation />
      </header>
      <main className={styles.contentWrap}>
        {children}
      </main>
    </div>
  )
}