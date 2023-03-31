import React from 'react';
import styles from './contactsAndInfoUser.module.scss';
import phone2 from '../../../assets/img/imageNavigation/phone2.svg'
import like from '../../../assets/img/imageNavigation/favorite.svg'
import person from '../../../assets/img/imageNavigation/person.svg'
import {useSelector} from 'react-redux';

const ContactsAndInfoUser = () => {

    const nameUser = useSelector((state) => state.user.nameUser) || 'Guest';
    const likes = useSelector((state) => state.orderCreator.likes)


    return (
        <div className={styles.subRight}>
            <div className={styles.subNavigationRight} >
                <img src={phone2} alt='phone'/>
                <span>+375 29 000 00 00</span>
            </div>
            <div className={styles.favorite}><img src={like} alt='like'/><span >{likes > 0 ? likes : ''}</span></div>
            <div className={styles.person}>
                <img src={person} alt='person'/>
                <span>{nameUser}</span>
            </div>
        </div>
    )
}

export default ContactsAndInfoUser

