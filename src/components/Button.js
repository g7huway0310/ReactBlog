import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES =['btn--primary','btn--outline'];

const SIZES =['btn--medium','btn--large'];


export const Button =({
    children,
    type,
    onClick,
    butttonStyle,
    buttonSize
})=>{
    const checkButtonStyle=STYLES.includes(butttonStyle) 
    ? butttonStyle 
    : STYLES[0];

    const checkButtonSize=STYLES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]; 

    return(
        <Link to='/sign up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
            <Button></Button>

        </Link>



    )


};
