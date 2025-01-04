import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="mb-40">
                    <h1><b>BARBEARIA NETO</b></h1>
                </div>
                <div className="mb-40">
                    <p className="texto-hero" >A Neto Barbearia é um espaço moderno e acolhedor, dedicado ao cuidado masculino.
                        Oferece cortes de cabelo e barba com estilo, além de um atendimento personalizado
                        que valoriza cada cliente.
                        A tradição e a atenção aos detalhes fazem da Neto Barbearia uma referência em
                        elegância.</p>
                </div>
                <div className="mb-40">
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <button className="hero-button">AGENDE SEU CORTE</button>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Hero;
