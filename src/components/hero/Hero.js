import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
        <div className="hero">
            <div className="logo-hero">
            </div>
        </div>
    );
};

export default Hero;
