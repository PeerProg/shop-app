import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Spacer from '../../components/spacer';
import styles from './Product.module.scss';

const Product = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState(null);

  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      axios.get(`/api/products/${productId}`).then(res => {
        setProductDetails(res.data);
      });
    }
  }, [productId]);

  return (
    <div className={styles.root}>
      <img alt="" src={productDetails.image} className={styles.image} />
      <Spacer width={30} />
      <section className={styles.details}>
        <article className={styles.title_section}>
          <h2>{productDetails.title}</h2>
        </article>
        <p>Price: &#36;{productDetails.price}</p>
        <details className={styles.description}>
          <summary>Description</summary>
          <p>{productDetails.description}</p>
        </details>
      </section>
    </div>
  );
};

export default Product;
