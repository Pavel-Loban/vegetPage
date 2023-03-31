
import React from 'react';
import Carusel from '../../Components/Carusel/Carusel';
import { Navigate  } from 'react-router-dom';
import {useAuth} from '../../hooks/use-auth';

import './home.scss';

const Home = () => {
  const tokenVeget = localStorage.getItem('tokenVeget')
  const {isAuth} = useAuth();

  return  tokenVeget ? (

    <div className={'home'}>
      <Carusel />
    </div>

  ) : (
   <Navigate to='/login'/>
  // ''
  )
}

export default Home
