import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        // navigate('/login')
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        // navigate('/home');
        console.log(user);
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? '' : 'ps-2  text-danger'} htmlFor="terms"> Accept Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms"> Accept Terms and Conditions</label>

                <input disabled={!agree}
                    className='btn btn-success' type="submit" value="Register" />
                <p>Already Have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;