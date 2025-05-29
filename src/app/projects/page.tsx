import Page from '@/components/page';

import styles from './projects.module.css';

export default function Projects() {
  return (
    <Page>
      <section className={`${styles.project} ${styles.alignLeft}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Градски Изгледи и Архитектура</div>
          <div className={styles.link}>Разгледай Галерия</div>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/projects-cityscapes.jpg" />
        </div>
      </section>
      <section className={`${styles.project} ${styles.alignRight}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Пейзажи</div>
          <div className={styles.link}>Разгледай Галерия</div>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/projects-landscapes.jpg" />
        </div>
      </section>
      <section className={`${styles.project} ${styles.alignLeft}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Концептуални</div>
          <div className={styles.link}>Разгледай Галерия</div>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/projects-concept.jpg" />
        </div>
      </section>
      <section className={`${styles.project} ${styles.alignRight}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Небе</div>
          <div className={styles.link}>Разгледай Галерия</div>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/projects-sky.jpg" />
        </div>
      </section>
    </Page>
  )
}