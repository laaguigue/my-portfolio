import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LAAGUIGUE AYOUB</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to My Portfolio</h1>
        <p>This is where I showcase my work.</p>
      </main>
    </div>
  );
}