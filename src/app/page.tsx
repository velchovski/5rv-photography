import Image from "next/image";
import Navigation from "@/components/navigation";
import Splash from '@/components/home/splash';
import Works from '@/components/home/works';

import About from "@/components/about";

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.navigationWrap}>
        <Navigation />
      </header>
      <main className={styles.contentWrap}>
        <Splash />
        <About />
        <Works />
      </main>
    </div>
  );
}
