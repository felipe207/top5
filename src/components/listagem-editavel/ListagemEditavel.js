import React, { useEffect, useState } from "react";
import axios from "axios";
import './ListagemEditavel.css';

const ListagemEditavel = () => {
    // pega os valores da api loccalhost:8000/api/musicas
    const [musicas, setMusicas] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMusicas = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/musicas");
          if (response.data.results) {
            setMusicas(response.data.results);
            
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

    return (
        <div className="le-container">
            <div className="le-header">
                <h1 className="le-title-1">Ranking Atual</h1>
            </div>
            {musicas.map((musica) => {
                return (
                    <div className="le-box" key={musica.youtube_id}>
                        <div className="le-thumb">
                            <h1 className="numero">{musicas.indexOf(musica) + 1}</h1>
                        </div>
                        <div className="le-input">
                            <input type="text" className="input-editavel" value={musica.titulo} />
                        </div>
                        <div className="le-input">
                            <input type="text" className="input-editavel" value={musica.visualizacoes} />
                        </div>
                        <div className="le-input">  
                            <input type="text" className="input-editavel" value={musica.link} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListagemEditavel;
