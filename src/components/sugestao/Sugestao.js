import React, { useState } from "react";
import './Sugestao.css';

const Sugestao = () => {
    const [inputValue, setInputValue] = useState(""); 
    const [responseMessage, setResponseMessage] = useState(""); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleButtonClick = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/salva-musica", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ link: inputValue }), 
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar dados para a API");
            }

            const data = await response.json();
            setResponseMessage(data.message);
        } catch (error) {
            setResponseMessage("Erro ao conectar à API. Tente novamente."); 
            console.error(error);
        }
    };

    return (
        <div className="sugestao-container">
            <div className="sugestao-header">
                <h1 className="sugestao-title-1">Sugerir Nova Música</h1>
            </div>
            <div className="sugest-box">
                <h1 className="sugest-title">Cole aqui o link do YouTube</h1>
                <div className="sugest-elements">
                    <input
                        type="text"
                        className="sugest-input"
                        placeholder="https://www.youtube.com/watch?v=bx1Bh8ZvH84"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className="sugest-button" onClick={handleButtonClick}>
                        Enviar
                    </button>
                </div>
                {responseMessage && (
                    <div className="response-message">
                        <p>{responseMessage}</p> 
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sugestao;
