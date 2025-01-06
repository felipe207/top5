import React from "react";
import './Sugestao.css';

const Sugestao = () => {
    return (
        <div className="sugestao-container">
            <div className="sugestao-header">
                <h1 className="sugestao-title-1">Sugerir Nova Música</h1>
            </div>
            <div className="sugest-box">
                <h1 className="sugest-title">Cole aqui o link do youtube</h1>
                <div className="sugest-elements">
                    <input type="text" className="sugest-input" placeholder="https://www.youtube.com/watch?v=bx1Bh8ZvH84" />
                    <button className="sugest-button">Enviar</button>
                </div>

            </div>
        </div>
    );
};

export default Sugestao;
