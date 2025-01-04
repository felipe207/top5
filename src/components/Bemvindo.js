import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Bemvindo = () => {
    return (
        <section className="bem-vindo">
            <div className="bem-vindo-content">

                <div className="row">
                    <div className='col-md-2 invisible-div-1'>
                    </div>
                    <div className='col-md-4 elementos-bv'>
                        {/* linha de 50 centimetros*/}
                        <hr className='linha mt-50' />

                        <div className="mb-10">
                            <h3><b>Sobre a Barbearia</b></h3>
                        </div>

                        <div className="mb-30">
                            <h2><b>BARBEARIA NETO</b></h2>
                        </div>

                        <div className="">
                            <p className="bem-vindo-text" >A Neto Barbearia é um espaço moderno e acolhedor, dedicado ao cuidado masculino.
                                Oferece cortes de cabelo e barba com estilo, além de um atendimento personalizado
                                que valoriza cada cliente.
                                A tradição e a atenção aos detalhes fazem da Neto Barbearia uma referência em
                                elegância.</p>
                        </div>

                    </div>

                    <div className='col-md-6 position-relative foto-bem-vindo'>
                        <div className="quadrado"></div>

                        <div className="imagem-sobreposta">
                            <img src="/img/barbeiro.png" alt="Barbeiro" className='barbeiro' />
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Bemvindo;
