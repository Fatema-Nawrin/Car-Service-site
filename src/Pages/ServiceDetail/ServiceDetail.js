import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome To Details:{serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;