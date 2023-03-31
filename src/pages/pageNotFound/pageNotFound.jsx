import React from 'react';
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {

    const push = useNavigate()
    return (
        <div>
            <h1
            style={{display: 'flex',
        justifyContent: 'center',
    alignItems: 'center',
fontSize: '30px',
padding: '20px 0'}}
        >Page Not Found</h1>
    <button onClick={() => push('/')}> home</button>
        </div>
    );
};

export default PageNotFound;