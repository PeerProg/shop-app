import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
            <Link href={`/product/${product.id}`} key={product.id}>
              <a className={styles.card}>
                <h3>{product.title} &rarr;</h3>
                <p>{product.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
