import * as Yup from 'yup';

export const SchemaRegistration = Yup.object().shape({
    email: Yup.string().required('cannot be empty')
     .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Please enter a valid e-mail'),

    password: Yup.string()
        .required('cannot be empty')
        .min(8, 'Password must be more than 8 characters')
        .max(16)
        .matches(
            /(?=.*[A-Z])\w+/,
            'Password must contain at least one uppercase latin letter',
        )
        .matches(/\d/, 'Password must contain at least one number'),

        userName: Yup.string().required('cannot be empty')
        .matches(
            (/^[a-z0-9]+$/i),
            'Only letters and numbers',)
            .matches((/[a-zA-Z]/), '')
            ,
});

export const SchemaAuth = Yup.object().shape({
    email: Yup.string().required('cannot be empty')
     .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Please enter a valid e-mail'),

    password: Yup.string()
        .required('cannot be empty')
        .min(8, 'Password must be more than 8 characters')
        .max(16)
        .matches(
            /(?=.*[A-Z])\w+/,
            'Password must contain at least one uppercase latin letter',
        )
        .matches(/\d/, 'Password must contain at least one number'),

        // userName: Yup.string().required('cannot be empty')
        // .matches(
        //     (/^[a-z0-9]+$/i),
        //     'Only letters and numbers',)
        //     .matches((/[a-zA-Z]/), '')
        //     ,
});















export const SchemaStep2 = Yup.object().shape({
    firstName: Yup.string().required('Поле не может быть пустым')
        .matches(/^\S*$/, 'Не заполнено')
        .max(16),
    lastName: Yup.string()
        .required('Поле не может быть пустым')
        .matches(/^\S*$/, 'Не заполнено')
        .max(25),

});

export const SchemaLastStep = Yup.object().shape({
    phone: Yup.string().required('Поле не может быть пустым')
     .matches(/(?:\+375)\s?\(?29|25|33|44\)?\s?\d\d(?:\d[-\s]\d\d[-\s]\d\d|[-\s]\d\d[-\s]\d\d\d|\d{5})/, 'В формате +375 (xx) xxx-xx-xx')
     .matches(/^([^\\s*]+)/g,'poiuyt')
     .matches(/(.*\d.*){12}/, 'В формате +375 (xx) xxx-xx-xx')
     ,
     email: Yup.string().required('Поле не может быть пустым')
     .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Введите корректный e-mail'),
 });


 export const SchemaSignIn = Yup.object().shape({
    identifier: Yup.string().required('Поле не может быть пустым')
    ,
    password: Yup.string()
        .required('Поле не может быть пустым')

});