import React from 'react';
import './Footer.css'
const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='footer'>
            <p>&copy; {year} Lotus Hotel All rights reserved.</p>
        </div>
    );
};

export default Footer;
