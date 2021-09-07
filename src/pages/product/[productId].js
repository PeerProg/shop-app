import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from './Product.module.scss';

const Product = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState(null);

  const { productId } = router.query;

  console.log('Product Details', productDetails);

  useEffect(() => {
    if (productId) {
      axios.get(`/api/products/${productId}`).then(res => {
        setProductDetails(res.data);
      });
    }
  }, [productId]);

  return <div>Product page</div>;
};

export default Product;
