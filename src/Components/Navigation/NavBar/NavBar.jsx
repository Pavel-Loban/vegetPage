import React from 'react'
import styles from './navBar.module.scss'
import cart from '../../../assets/img/imageNavigation/cart.svg'
import vector from '../../../assets/img/imageNavigation/Vector.svg'
import { Link, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import {removeUser} from '../../../slice/userSlice'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const location = useLocation();

  const push = useNavigate()

  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user.nameUser) || 'Guest';
  const [toLink, setToLink] = React.useState(0)

  const [select, setSelect] = React.useState(0)
  const navigation = ['HOME', 'PRODUCT', 'STORES', 'CONTACT']
  const linkTo = ['/', '/product', '/stores', '/contact']

  localStorage.setItem('key', toLink)

  const onSelect = (id) => {
    setSelect(id)
    setToLink(id)
  }

  const logOut = () => {
    dispatch(removeUser());
    localStorage.removeItem('tokenVeget')
    push('/');
  }

  return (
    <div className={styles.sort}>
      <div className={styles.navList}>
        <ul>
          {navigation.map((item, i) => (
            <Link to={linkTo[i]} key={i}>
              {' '}
              <li
                key={i}
                className={select === i ? styles.textColor : ''}
                onClick={() => onSelect(i)}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button
      variant="contained"
      className={styles.btnCart}
      onClick={() => logOut()}
      >
        {`Log out from
        ${userName}`}
      </Button>
      {location.pathname !== '/shoppingCart' &&  <Link to={'/shoppingCart'}>
        <Button variant="contained" className={styles.btnCart}>
          <img src={cart} alt='cart'/>
          Cart 2
          <img src={vector} alt='vector'/>
        </Button>
      </Link>}
    </div>
  )
}

export default NavBar
