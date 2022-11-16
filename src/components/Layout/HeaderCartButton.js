import React from 'react'
import styles from "./HeaderCartButton.module.css";


const HeaderCartButton = () => {
  return (
    <div className={styles.cartButton}>
        <span><i className='bx bx-cart-alt'></i></span>
        <span>Your Cart</span>
        <span>4</span>
    </div>
  )
}

export default HeaderCartButton
