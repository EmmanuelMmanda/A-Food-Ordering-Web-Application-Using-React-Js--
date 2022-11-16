import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Foodies from "../../Assets/foody-Header.jpg";

const Header = () => {
  return (
    <Fragment>
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderLogo}>
          <span>F</span>
          <span>oo</span>
          <span>dy</span>
        </div>
        <HeaderCartButton />
      </div>
      <div className={styles.imageFrame}>
        <div className={styles.image}>
          <img src={Foodies} alt="fods in Tanzania" />
        </div>
        <div className={styles.desc}>
          <h2>
            Welcome to Foody , Get Ugali
            Sangara and the Famous Mlenda Right Away
          </h2>
          <p>We Give out Free Delivery Discounts , For 3 Ordered Meals</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
