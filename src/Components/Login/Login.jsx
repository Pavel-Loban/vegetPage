import React from 'react'
import Form from 'Components/Form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser, setAlertAuth } from 'slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { SchemaAuth } from '../../validations-shema';

const Login = () => {

  const dispatch = useDispatch()
  const push = useNavigate()

  const handleLogin = (email, password,name) => {

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            nameUser: name,
          }),
        )
        localStorage.setItem('tokenVeget',JSON.stringify(user))
            console.log(localStorage.getItem('tokenVeget'))
        dispatch(setAlertAuth(''))
        push('/')
      })
      // .catch(() => alert('Invalid user!'))
      // .catch(() => dispatch(setAlertAuth('Неверный логин или пароль')))
      .catch((error) => {
        console.log({error})
        if(error.code === 'auth/user-not-found'){
          return dispatch(setAlertAuth('User with this email was not found'))
        }
        if(error.code === 'auth/wrong-password'){
          return dispatch(setAlertAuth('Incorrect password'))
        }

        if(error){
          return dispatch(setAlertAuth('Something went wrong'))
        }
      })
  }
  return (
  <Form
  title="sign in"
  handlClick={handleLogin}
  Shema={SchemaAuth}
  />
  )
}

export default Login
