'use client';

import {useEffect, useRef} from 'react';
import styles from './splash.module.css';


export default function Splash() {

  const overlayRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let refId: number;
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${scrollY * -0.5}px)`;
      }
      if (quoteRef.current) {
        quoteRef.current.style.transform = `translateY(${scrollY * -1}px)`;
      }
      refId = requestAnimationFrame(onScroll);
    }
    refId = requestAnimationFrame(onScroll);
    return () => cancelAnimationFrame(refId);
  }, [])
  
  return (
    <section className={styles.homeSplash}>
      <div className={styles.homeImage}>
        <img fetchPriority="high" src="/home-splash.jpg" />
      </div>
      <div className={styles.homeOverlay} ref={overlayRef}></div>
      <div className={styles.homeQuote} ref={quoteRef}>
        <div className={styles.homeQuoteText}>
          Photography is just capturing a moment<br/>
          and keeping it both in the past and in the future.<br/>
          I like finding moments worth keeping.
        </div>
      </div>
      <div className={styles.scrollInfo}>
        <div className={styles.scrollText}>Разгледай</div>
        <div className={styles.scrollIcon}>▼</div>
      </div>
    </section>
  )
}