import React, { useEffect, useState } from "react";
import axios from "axios";
import './Form.css';

const Form = (props) => {
    const [musica, setMusica] = useState({
        nome: "",
        autor: "",
        ano: "",
        estilo: "",
        visualizacoes: "",
        link: "",
        ordem: "",
        status: "ativo"
    });
    const [error, setError] = useState(null);
    const id = props.id;

    useEffect(() => {
        const fetchMusica = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/musicas/${id}`);
                if (response.data.results) {
                    setMusica(response.data.results);
                } else {
                    setError("Nenhum resultado encontrado.");
                }
            } catch (err) {
                setError(err.response?.data?.message || "Erro ao buscar a música.");
            }
        };

        fetchMusica();
    }, [id]);

    const editaMusica = async (id) => {
        try {
            await axios.put(`http://localhost:8000/api/update-musica/${id}`, musica);
            alert("Música atualizada com sucesso!");
            window.location.href = "/musicas";
        } catch (err) {
            console.error(err);
            setError("Erro ao atualizar a música.");
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h1 className="title-form">Formulário</h1>
            </div>
            <div className="form-box">
                {error && <p className="error-message">{error}</p>}
                <div className="form-input">
                    <label className="inp" htmlFor="nome">Nome:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="nome"
                        value={musica.nome}
                        onChange={(e) => setMusica({ ...musica, nome: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="autor">Autor:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="autor"
                        value={musica.autor}
                        onChange={(e) => setMusica({ ...musica, autor: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="ano">Ano:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="ano"
                        value={musica.ano}
                        onChange={(e) => setMusica({ ...musica, ano: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="estilo">Estilo:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="estilo"
                        value={musica.estilo}
                        onChange={(e) => setMusica({ ...musica, estilo: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="visualizacoes">Visualizações:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="visualizacoes"
                        value={musica.visualizacoes}
                        onChange={(e) => setMusica({ ...musica, visualizacoes: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="link">Link:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="link"
                        value={musica.link}
                        onChange={(e) => setMusica({ ...musica, link: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="ordem">Ordem:</label>
                    <input
                        className="inputt"
                        type="text"
                        name="ordem"
                        value={musica.ordem}
                        onChange={(e) => setMusica({ ...musica, ordem: e.target.value })}
                    />
                </div>
                <div className="form-input">
                    <label className="inp" htmlFor="status">Status:</label>
                    <select
                        className="inputt"
                        name="status"
                        value={musica.status}
                        onChange={(e) => setMusica({ ...musica, status: e.target.value })}
                    >
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                </div>
                <button
                    className="form-button"
                    onClick={() => editaMusica(musica.id)}
                >
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default Form;
