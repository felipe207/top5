import React, { useEffect, useState } from "react";
import axios from "axios";
import './ListagemEditavel.css';

const ListagemEditavel = () => {
    const [musicas, setMusicas] = useState([]);
    const [error, setError] = useState(null);
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000';

    useEffect(() => {
        const fetchMusicas = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/musicas`);
                if (response.data.results) {
                    setMusicas(response.data.results.data);

                } else {
                    setError("Nenhum resultado encontrado.");
                }
            } catch (err) {
                setError(err.response?.data?.message || "Erro ao buscar músicas.");
            }
        };

        fetchMusicas();
    }, []);

    function formatViews(views) {
        if (views >= 1000000) {
            return `${(views / 1000000).toFixed(1).replace('.', ',')} M`;
        } else if (views >= 1000) {
            return `${(views / 1000).toFixed(1).replace('.', ',')} K`;
        }
        return views.toString();
    };

    function excluirMusica(id) {
        axios.delete(`${backendUrl}/api/delete-musica/${id}`)
            .then(() => {
                
                alert("Música excluída com sucesso!");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="le-container">
            <div className="le-header">
                <h1 className="le-title-1">Músicas</h1>
            </div>
            {musicas.map((musica) => {
                return (
                    <div className="le-box" key={musica.id}>
                        <div className="le-input">
                            <iframe className="iframe-video"
                                src={`https://www.youtube.com/embed/${musica.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="le-input">
                            <b htmlFor="titulo">Ordem:</b>
                            {musica.ordem}
                        </div>
                        <div className="le-input">
                            <b htmlFor="titulo">Título:</b>

                            {musica.titulo}
                        </div>
                        <div className="le-input">
                            <b htmlFor="artista">Artista:</b>
                            {musica.artista}
                        </div>
                        <div className="le-input">
                            <b htmlFor="artista">Visualizações:</b>
                            {musica.visualizacoes}
                        </div>
                        <div className="le-input">
                            <b htmlFor="link">Link:</b>
                            {musica.link}
                        </div>
                        <div className="le-opcoes">
                            <a href={`/edita-musica/${musica.id}`}>
                                <button className="le-button-edit">Editar</button>
                            </a>
                            <button className="le-button-delete" onClick={() => excluirMusica(musica.id)}>
                                Excluir
                            </button>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListagemEditavel;
