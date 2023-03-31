import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Form from 'Components/Form/Form';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { setUser } from 'slice/userSlice';
import { SchemaRegistration } from '../../validations-shema';


const SingUp = () => {


    const dispatch = useDispatch();
    const push = useNavigate();

    const {user} = useSelector((state) => state.user )

    const handleRegister = (email, password, name) => {


        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
                nameUser: name,
            }));
            localStorage.setItem('tokenVeget',JSON.stringify(user))
            push('/')
        })
        .catch(console.error)
    }

    return (
        <Form
            title='register'
            handlClick={handleRegister}
            Shema={SchemaRegistration}
        />
    );
};

export default SingUp;