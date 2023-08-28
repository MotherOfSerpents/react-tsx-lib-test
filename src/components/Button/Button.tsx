import React from 'react';

interface ButtonProps {
    children: React.ReactNode[]
}

const Button = ({children}: ButtonProps): React.JSX.Element => {

    return (
        <button
            style={{
                backgroundColor: '#ff00ff',
                border: 'none',
                borderRadius: '4px',
            }}
        >
            {children}
        </button>
    )
};

export default Button;