// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    // Função para detectar a rolagem da página
    useEffect(() => {
        const handleScroll = () => {
            // console.log('window.scrollY',window.scrollY);
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            {/* <h1>Meu Site</h1> */}
            
            <div className="logo-header">
                <link rel="icon" href="#" />
                <img src="/img/logo.png" alt="Logo" className='logo' 
                />
            </div>
            <nav className="itens-header">
                <ul className="nav-links">
                    <li>
                        <div className="inline">
                            <a href="#" className="header-icon laranha" target="_blank" rel="noreferrer">
                                <Icon icon="ic:outline-place" className="text-3xl md:text-2xl transition-all icon-header" />
                            </a>
                            Rod. Augusto Montenegro - Marambaia - PA
                        </div>
                    </li>
                    <li>
                        <div className="inline">
                            <a href="#" className="header-icon laranha" target="_blank" rel="noreferrer">
                                <Icon icon="ic:round-whatsapp" className="text-3xl md:text-2xl transition-all  icon-header" />
                            </a>
                            91 98577 1525
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
