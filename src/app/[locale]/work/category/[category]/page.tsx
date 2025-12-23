import Page from '@/components/page';
import styles from './category.module.css';

export default function WorkCategory(
  {params}: {params: {category: string}}) {
  const {category} = params;
  console.log(category);
  return (
    <Page>
      <section className={styles.categorySummary}>
        <h1>City Scapes</h1>
        <p>Capturing the rhythm and architecture of urban life, from towering skylines to quiet street corners, revealing the character and energy of each city. </p>
      </section>
    </Page>
  )
}