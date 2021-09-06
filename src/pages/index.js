import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Shop App App</h1>

        <div className={styles.grid}>
          {products.map(product => (
            <a
              href="https://nextjs.org/docs"
              className={styles.card}
              key={product.id}
            >
              <h3>{product.title} &rarr;</h3>
              <p>{product.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
