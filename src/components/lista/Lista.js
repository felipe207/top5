import React, { useEffect, useState } from "react";
import axios from "axios";
import './Lista.css';

const Lista = () => {
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



    // let musicas = [
    //     {
    //         'titulo': 'O Mineiro e o Italiano',
    //         'visualizacoes': 5200000,
    //         'youtube_id': 's9kVG2ZaTS4',
    //         'thumb': 'https://img.youtube.com/vi/s9kVG2ZaTS4/hqdefault.jpg'
    //     },
    //     {
    //         'titulo': 'Pagode em Brasília',
    //         'visualizacoes': 5000000,
    //         'youtube_id': 'lpGGNA6_920',
    //         'thumb': 'https://img.youtube.com/vi/lpGGNA6_920/hqdefault.jpg'
    //     },
    //     {
    //         'titulo': 'Rio de Lágrimas',
    //         'visualizacoes': 153000,
    //         'youtube_id': 'FxXXvPL3JIg',
    //         'thumb': 'https://img.youtube.com/vi/FxXXvPL3JIg/hqdefault.jpg'
    //     },
    //     {
    //         'titulo': 'Tristeza do Jeca',
    //         'visualizacoes': 154000,
    //         'youtube_id': 'tRQ2PWlCcZk',
    //         'thumb': 'https://img.youtube.com/vi/tRQ2PWlCcZk/hqdefault.jpg'
    //     },
    //     {
    //         'titulo': 'Terra roxa',
    //         'visualizacoes': 3300000,
    //         'youtube_id': '4Nb89GFu2g4',
    //         'thumb': 'https://img.youtube.com/vi/4Nb89GFu2g4/hqdefault.jpg'
    //     }
    // ];

    function formatViews(views) {
        if (views >= 1000000) {
            return `${(views / 1000000).toFixed(1).replace('.', ',')} M`;
        } else if (views >= 1000) {
            return `${(views / 1000).toFixed(1).replace('.', ',')} K`;
        }
        return views.toString();
    };

    return (
        <div className="lista-container">
            <div className="lista-header">
                <h1 className="lista-title-1">Ranking Atual</h1>
            </div>
            {musicas.map((musica) => {
                return (
                    <div className="lista-box" key={musica.youtube_id}>
                        <div className="lista-thumb">
                            <h1 className="numero-ranking">{musicas.indexOf(musica) + 1}</h1>
                        </div>
                        <div className="lista-visualizacoes">
                            <h1 className="lista-title">{musica.titulo}</h1>
                            <p>{formatViews(musica.visualizacoes)} visualizações</p>
                        </div>
                        <div className="lista-video">
                            <iframe className="iframe-video" 
                            src={`https://www.youtube.com/embed/${musica.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Lista;
