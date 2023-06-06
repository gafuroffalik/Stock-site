import React, { useState } from 'react';
import Error from '../components/Error';

const ErrorPage = ({ show, onHide }) => {

    const [errorVisible, setErrorVisible] = useState(true)
    return (
        <Error
            show={errorVisible}
            onHide={() => setErrorVisible(false)}
        />
    );
};

export default ErrorPage;