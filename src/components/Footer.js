import React from 'react';
import { Icon } from '@iconify/react';
// Importe um arquivo de estilo opcional

const Footer = () => {
    return (
        <footer className="footer">

            <div>
                <div className="logo mt-25 mb-150">
                    <img src="/img/logo.png" alt="Logo" />
                </div>
                <div className="redes mb-100">
                    <a href="https://www.facebook.com/barbearia-neto/"
                        className="redeIcon ml-10" target="_blank" rel="noreferrer">
                        <Icon icon="lucide:facebook" className="text-3xl md:text-2xl transition-all"/>
                    </a>
                    <a href="https://www.instagram.com/barbearia-neto/"
                        className="redeIcon ml-10" target="_blank" rel="noreferrer">
                        <Icon icon="lucide:instagram" className="text-3xl md:text-2xl transition-all"/>
                    </a>
                    <a href="https://www.linkedin.com/barbearia-neto/"
                        className="redeIcon ml-10" target="_blank" rel="noreferrer">
                        <Icon icon="lucide:linkedin" className="text-3xl md:text-2xl transition-all"/>
                    </a>
                </div>
            </div>
            <div className="footer-content">
                <p>Copyrigth &copy; {new Date().getFullYear()} by Zuh - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};



export default Footer;
