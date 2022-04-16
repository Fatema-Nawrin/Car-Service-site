import React from 'react';
import google from '../../../images/Social/google-logo.png';
import fb from '../../../images/Social/fb-logo.png';
import github from '../../../images/Social/github-logo.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>

    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'> or </p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img style={{ width: '23px' }} className='pb-1 me-1' src={google} alt="" />
                    Google Sign In</button>
                <button className='btn btn-success w-50 d-block mx-auto my-3'>
                    <img style={{ width: '23px' }} className='pb-1 me-1' src={fb} alt="" />
                    Facebook Sign In</button>
                <button onClick={() => signInWithGithub()} className='btn btn-success w-50 d-block mx-auto'>
                    <img style={{ width: '23px' }} className='pb-1 me-1' src={github} alt="" />
                    Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;