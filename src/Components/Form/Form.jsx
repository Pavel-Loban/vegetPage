import React from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';

import styles from './form.module.scss'

const Form = ({title, handlClick, Shema}) => {


    const {alertAuth} = useSelector((state) => state.user )

const getReg = (email,pass,uName) => {
    try {
        handlClick(email,pass,uName)
    } catch (error) {
        console.log(error)
    }
}



    return (
        <div className={styles.form_wrapper}>



<Formik
                initialValues={{
                    email: '',
                    password: '',
                    userName: '',
                }}
                validationSchema={Shema}
                onSubmit={(values) => getReg(values.email,values.password,values.userName)}
            >
                {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    dirty,
                    touched,
                    isValid,
                }) => {


                    return (
                        <form className={styles.auth_form}
                            onSubmit={handleSubmit}
                        >

<div className={styles.input_wrapper}>
    {alertAuth && <p className={ styles.input_span_error}>{alertAuth}</p>}
<input className={styles.input}
            value={values.email}
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='email'
            />

{touched.email && errors.email &&
       <span className={ styles.input_span_error}  >
       {errors.email}
   </span>}
</div>


<div className={styles.input_wrapper}>

<input className={styles.input}
            value={values.password}
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='password'
            />

{touched.password && errors.password &&
       <span className={ styles.input_span_error}  >
       {errors.password}
   </span>}

</div>

<div className={styles.input_wrapper}>
<input className={styles.input}
            value={values.userName}
            name='userName'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='name'
            maxLength={15}
            />

{touched.userName && errors.userName &&
       <span className={ styles.input_span_error}  >
       {errors.userName}
   </span>}

</div>


            <button type='submit' className={styles.button_login}
            // onClick={() => handlClick(email,pass,name)}
            >
                {title}
            </button>

                        </form>

                    );
                }}
            </Formik>

        </div>
    );
};

export default Form;