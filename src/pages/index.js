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
        <title>Shop App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map(product => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <a>
                <div className={styles.card}>
                  <img src={product.image} alt='Product image' />
                  <h5>{product.title} &rarr;</h5>
                  <h4>${product.price}</h4>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
