import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    name: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    gender: Yup.string().required("Gender is required.")

})