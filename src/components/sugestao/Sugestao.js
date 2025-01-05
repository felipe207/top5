import React from "react";
import './Sugestao.css';

const Sugestao = () => {
    return (
        <div className="sugestao-container">
            <div className="sugest-box">
                <h1 className="sugest-title">Sugerir Nova Música</h1>
                {/* <p className="sugest-text">Vídeo cadastrado com successo</p> */}
                <input type="text" className="sugest-input" placeholder="Cole aqui o link do youtube" />

            </div>
        </div>
    );
};

export default Sugestao;
