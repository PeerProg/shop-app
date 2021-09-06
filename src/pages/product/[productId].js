import React from 'react';
import { useRouter } from 'next/router';
import styles from './Product.module.scss';

const Product = () => {
  const router = useRouter();

  const { productId } = router.query;

  console.log('ProductId', productId);

  return <div>Product page</div>;
};

export default Product;
