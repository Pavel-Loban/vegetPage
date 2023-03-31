import React from 'react';
import { useNavigate } from 'react-router-dom'


const PageNotFound = () => {

    const push = useNavigate()
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
        }}>
            <h1
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '30px',
                    padding: '20px 0'
                }}
            >Page Not Found</h1>
            <button
            onClick={() => push('/')}
            style={{
                    fontSize: '20px',
                    cursor:'pointer',
                    background:'#7FAD39',
                    padding: '5px 10px',
                    borderRadius:'5px',
                    color: 'white',
            }}
            >
            home
            </button>
        </div>
    );
};

export default PageNotFound;