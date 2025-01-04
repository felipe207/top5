import React from 'react';
import { Icon } from '@iconify/react';

const Banner1 = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="bi1">
                    <a href="#" className="laranha" target="_blank" rel="noreferrer">
                        <Icon icon="bxs:quote-right" width="100" height="100" className="" />
                    </a>
                </div>
                <div className="bi2">
                    <h1 className="banner-text"><b>A melhor barbearia de Belém</b></h1>
                </div>

                <div className="bi1">
                    <h3 className='laranha'>Mario Sergio</h3>
                </div>
            </div>
        </div >
    );
};

export default Banner1;
