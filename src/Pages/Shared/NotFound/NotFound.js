import React from 'react';
import sleepy from '../../../images/sleepy.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-success my-4'>Mechanic is sleeping</h2>
            <div className='text-center my-4'>
                <img height={200} src={sleepy} alt="" />
            </div>
        </div>
    );
};

export default NotFound;