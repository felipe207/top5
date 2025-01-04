import React from 'react';
import './Mapa.css';
import { Icon } from '@iconify/react';

const Mapa = () => {
    return (
        <div className="mapa">
            <div className="map-content">
                <div className="box text-box">

                    <div className='item-info'>
                        <a href="#" className="header-icon laranha" target="_blank" rel="noreferrer">
                            <Icon icon="ic:outline-place" className="text-3xl md:text-2xl transition-all" />
                        </a>
                        Rod. Augusto Montenegro - Marambaia - PA
                    </div>

                    <div  className='item-info'>
                        <a href="#" className="header-icon laranha" target="_blank" rel="noreferrer">
                            <Icon icon="ic:round-whatsapp" className="text-3xl md:text-2xl transition-all" />
                        </a>
                        91 98577 1525
                    </div>

                    <div  className='item-info'>
                        <a href="#" className="header-icon laranha" target="_blank" rel="noreferrer">
                            <Icon icon="ic:outline-email" className="text-3xl md:text-2xl transition-all" />
                        </a>
                        barbearianeto@gmail.com
                    </div>

                    <div  className='item-info'>
                        <a href="#" className="header-icon laranha" target="_blank" rel="noreferrer">
                            <Icon icon="tabler:clock" className="text-3xl md:text-2xl transition-all" />
                        </a>
                        10:00 às 20:00
                    </div>
                </div>
                <div className="box map-box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509403!2d144.96305791531586!3d-37.81410797975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b2b09b1f3fd3!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1614017160198!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Mapa;
