import Login from 'Components/Login/Login';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.scss'

const LoginPage = () => {
    return (
        <div className={styles.login_container} >
            <h1 className={styles.title}>Login</h1>
            <Login/>
            <p >
                Or <Link to='/register'><span>register</span> </Link>
                </p>
        </div>
    );
};

export default LoginPage;