import React from 'react';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'outline';
    text: string;
}

const Button = (props: ButtonProps) => {

    return (
        <button
            style={{
                backgroundColor: '#ff00ff',
                border: 'none',
                borderRadius: '4px',
            }}
        >
            {props.text}
        </button>
    )
};

export default Button;