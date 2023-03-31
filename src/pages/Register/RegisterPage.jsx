import SingUp from 'Components/SingUp/SingUp'
import React from 'react'
import { Link } from 'react-router-dom'
import  styles from './register.module.scss'

const RegisterPage = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <SingUp/>
      <p>
        Alredy have an account? <Link to="/login"><span>Sign in</span></Link>
      </p>
    </div>
  )
}

export default RegisterPage
