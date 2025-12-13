import Link from 'next/link';
import Page from '@/components/page';
import styles from './work.module.css';

type Category = {
  key: string;
  name: string;
};

async function getCategories(): Promise<Category[]> {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load categories");
  }
  return res.json();
}

export default async function Work() {
  const categories = await getCategories();
  console.log('Received categories:', categories);
  return (
    <Page>
      <section className={`${styles.project} ${styles.alignLeft}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Градски Изгледи и Архитектура</div>
          <Link href="/work/category/cityscapes" className={styles.link}>Разгледай Галерия</Link>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/work-cityscapes.jpg" />
        </div>
      </section>
      <section className={`${styles.project} ${styles.alignRight}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Пейзажи</div>
          <Link href="/work/category/landscapes" className={styles.link}>Разгледай Галерия</Link>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/work-landscapes.jpg" />
        </div>
      </section>
      <section className={`${styles.project} ${styles.alignLeft}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Концептуални</div>
          <Link href="/work/category/conceptual" className={styles.link}>Разгледай Галерия</Link>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/work-concept.jpg" />
        </div>
      </section>
      <section className={`${styles.project} ${styles.alignRight}`}>
        <div className={styles.projectSummary}>
          <div className={styles.title}>Небе</div>
          <Link href="/work/category/sky" className={styles.link}>Разгледай Галерия</Link>
        </div>
        <div className={styles.projectCoverImage}>
          <img src="/work-sky.jpg" />
        </div>
      </section>
    </Page>
  )
}