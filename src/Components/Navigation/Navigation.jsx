import React from 'react'
import styles from './nav.module.scss'
import mail from '../../assets/img/imageNavigation/mail.svg'
import phone from '../../assets/img/imageNavigation/phone.svg'
import faceBook from '../../assets/img/imageNavigation/faceBook.svg'
import linke from '../../assets/img/imageNavigation/linke.svg'
import twitter from '../../assets/img/imageNavigation/twitter.svg';
import NavBar from "../../Components/Navigation/NavBar/NavBar";
import Search from "./Search/Search";

const Navigation = () => {
  return (
    <>
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <img className={styles.mail } src={mail} alt="mail" />
        <span className={styles.textSpan}>Hello@colorlib.com</span>
      </div>
        <div className={styles.navRight} >
        <span className={styles.textSpanRight}>Free Shipping for all order of $99</span>
        <div className={styles.svgBlockNav} >
        <img className={styles.mail } src={faceBook} alt="faceBook" />
        <img className={styles.mail } src={phone} alt="phone" />
        <img className={styles.mail } src={linke} alt="linke" />
        <img  className={styles.mail } src={twitter} alt="twitter" />
        </div>
        </div>
    </div>
    <Search />
    <NavBar />
    </>
  )
}

export default Navigation
