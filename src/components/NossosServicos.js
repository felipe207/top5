import React from 'react';
import { Icon } from '@iconify/react';

const NossosServicos = () => {
    return (
        <div className="servicos">
            <div className="servicos-content">

                <div className='servicos-label'>
                    <div className='servicos-label-content'>
                        <hr className='linha ln-servico' />

                        <div className="mb-10">
                            <h3><b>Sobre a Barbearia</b></h3>
                        </div>

                        <div className="mb-30">
                            <h2 className="laranha"><b>BARBEARIA NETO</b></h2>
                        </div>

                        <div className="mb-100">
                            <p className="bem-vindo-text" >A Neto Barbearia é um espaço moderno e acolhedor, dedicado ao cuidado masculino.
                                Oferece cortes de cabelo e barba com estilo, além de um atendimento personalizado
                                que valoriza cada cliente.
                                A tradição e a atenção aos detalhes fazem da Neto Barbearia uma referência em
                                elegância.</p>
                        </div>
                    </div>

                </div>

                {/* ******** */}

                <div className='icones-servicos row'>
                    <div className="col-md-3 servicon">
                        <div className="ic1">
                            <a href="#" className="laranha" target="_blank" rel="noreferrer">
                                <Icon icon="mynaui:scissors" className="icone-serv rotate-left" />
                            </a>
                        </div>
                        <div className="ic1">
                            <h3 className="banner-text"><b>Cabelo</b></h3>
                        </div>
                        <div className="ic1 mlr-100">
                            <p className="texto-justificado">
                                Aqui você encontra os melhores barbeiros para você ficar na régua máxima, degrades e muitos desenhos.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 servicon">
                        <div className="ic1">
                            <a href="#" className="laranha" target="_blank" rel="noreferrer">
                                <Icon icon="icon-park-outline:straight-razor"className="icone-serv" />
                            </a>
                        </div>
                        <div className="ic1">
                            <h3 className="banner-text"><b>Barba</b></h3>
                        </div>
                        <div className="ic1 mlr-100">
                            <p className="texto-justificado">
                                Aqui você encontra os melhores barbeiros para você ficar na régua máxima, degrades e muitos desenhos.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 servicon">
                        <div className="ic1">
                            <a href="#" className="laranha" target="_blank" rel="noreferrer">
                                <Icon icon="mdi:ink-color" className="icone-serv" />
                            </a>
                        </div>
                        <div className="ic1">
                            <h3 className="banner-text"><b>Luzes</b></h3>
                        </div>
                        <div className="ic1 mlr-100">
                            <p className="texto-justificado">
                                Aqui você encontra os melhores barbeiros para você ficar na régua máxima, degrades e muitos desenhos.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 servicon">
                        <div className="ic1">
                            <a href="#" className="laranha" target="_blank" rel="noreferrer">
                                <Icon icon="icon-park-outline:barber-clippers" className="icone-serv" />
                            </a>
                        </div>
                        <div className="ic1">
                            <h3 className="banner-text"><b>Chapinha</b></h3>
                        </div>
                        <div className="ic1 mlr-100">
                            <p className="texto-justificado">
                                Aqui você encontra os melhores barbeiros para você ficar na régua máxima, degrades e muitos desenhos.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="parent-container-serv">
                    <div className="caixa-cinza">
                        <div className="quadrado-listagem">
                            <div className="lista-servicos ">
                                <div className="servico">
                                    <div className="lista-servico">
                                        <h3 className="ls-text"><b>Lista de Cortes</b></h3>
                                        <p className="laranja">Cortes Clássicos</p>
                                        <ul className="lista-cortes">
                                            <li>Undercut <hr className='linha-lista' /> <b>R$ 40,00</b> </li>
                                            <li>Side Part <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                            <li>Top Knot <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                            <li>Coque Masculino <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                            <li>Coque Samurai <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="servico">
                                    <div className="lista-servico">
                                        <h3 className="ls-text"><b>Lista de Cortes</b></h3>
                                        <p className="laranja">Cortes Clássicos</p>
                                        <ul className="lista-cortes">
                                            <li>Undercut <hr className='linha-lista' /> <b>R$ 40,00</b> </li>
                                            <li>Side Part <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                            <li>Top Knot <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                            <li>Coque Masculino <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                            <li>Coque Samurai <hr className='linha-lista' /> <b>R$ 40,00</b></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div >
    );
};

export default NossosServicos;