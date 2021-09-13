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
              <div className={styles.card}>
                <img src={product.image} alt='Product image' />
                <h5>{product.title} &rarr;</h5>
                <h4>${product.price}</h4>
                {/* <p>{product.description}</p> */}
                <div className={styles.buttons}>
                  <button>
                    <Link href={`/product/${product.id}`} key={product.id}>
                      <a>Details</a>
                    </Link>
                  </button>
                  <button>
                    <Link href={`/cart`} key={product.id}>
                        <a>Add to Cart</a>
                      </Link>
                  </button>
                </div>
              </div>
            
          ))}
        </div>
      </main>
    </div>
  );
}
