import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className='texto-footer'>Copyrigth &copy; {new Date().getFullYear()} Desenvolvido por Pinheiro</p>
            </div>
        </footer>
    );
};

export default Footer;
