import React from 'react';
import Link from 'next/link';
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

      <div>
        <Link href="/cart">
          <a className={styles.navbar__item}>Cart</a>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
