import React from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.navbar__item}>Home</a>
        </Link>
        <Link href="/checkout">
          <a className={styles.navbar__item}>Checkout</a>
        </Link>
      </div>

      <div className={styles.cart}>
        <span className={styles.cart__carticon}>
          <CartIcon />
        </span>
        <span>
          <Link href="/cart">
            <a className={styles.navbar__item}>Cart</a>
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
