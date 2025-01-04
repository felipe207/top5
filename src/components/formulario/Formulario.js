import React from 'react';
import './Formulario.css';

const Formulario = () => {
    return (
        <div className="formulario">
            <div className="formulario-content">
                <div className='servicos-label'>
                    <div className='servicos-label-content'>
                        <hr className='linha ln-servico' />
                        <div className="mb-10">
                            <h3><b>Venha nos Visitar</b></h3>
                        </div>
                        <div className="mb-30">
                            <h2 className="laranha"><b>Marque um Horário</b></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='inputs-form-content'>

                <div className='input-row'>
                    <div className='input-box'>
                        <div className='form-group'>
                            <label for='nome'>Nome</label>
                            <input type='text' id='nome' className='form-control' />
                        </div>
                    </div>
                    <div className='input-box'>
                        <div className='form-group'>
                            <label for='email'>Email</label>
                            <input type='email' id='email' className='form-control' />
                        </div>
                    </div>
                    <div className='input-box'>
                        <div className='form-group'>
                            <label for='telefone'>Telefone</label>
                            <input type='tel' id='telefone' className='form-control' pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" />
                        </div>
                    </div>
                </div>

                <div className='input-row'>
                    <div className='input-box'>
                        <div className='form-group'>
                            <label for='servico'>Serviço</label>
                            <input type='text' id='servico' className='form-control' />
                        </div>
                    </div>
                    <div className='input-box'>
                        <div className='form-group'>
                            <label for='data'>Data</label>
                            <input type='date' id='data' className='form-control' />
                        </div>
                    </div>
                    <div className='input-box'>
                        <div className='form-group'>
                            <label for='hora'>Hora</label>
                            <input type='time' id='hora' className='form-control' />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Formulario;