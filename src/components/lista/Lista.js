import React from "react";
import './Lista.css';

const Lista = () => {

    let musicas = [
        {
            'titulo' : 'O Mineiro e o Italiano',
            'visualizacoes' : 5200000,
            'youtube_id' : 's9kVG2ZaTS4',
            'thumb' : 'https://img.youtube.com/vi/s9kVG2ZaTS4/hqdefault.jpg'
        },
        {
            'titulo' : 'Pagode em Brasília',
            'visualizacoes' : 5000000,
            'youtube_id' : 'lpGGNA6_920',
            'thumb' : 'https://img.youtube.com/vi/lpGGNA6_920/hqdefault.jpg'
        },
        {
            'titulo' : 'Rio de Lágrimas',
            'visualizacoes' : 153000,
            'youtube_id' : 'FxXXvPL3JIg',
            'thumb' : 'https://img.youtube.com/vi/FxXXvPL3JIg/hqdefault.jpg'
        },
        {
            'titulo' : 'Tristeza do Jeca',
            'visualizacoes' : 154000,
            'youtube_id' : 'tRQ2PWlCcZk',
            'thumb' : 'https://img.youtube.com/vi/tRQ2PWlCcZk/hqdefault.jpg'
        },
        {
            'titulo' : 'Terra roxa',
            'visualizacoes' : 3300000,
            'youtube_id' : '4Nb89GFu2g4',
            'thumb' : 'https://img.youtube.com/vi/4Nb89GFu2g4/hqdefault.jpg'
        }
    ];


    return (
        <div className="lista-container">
            {musicas.map((musica) => {
                return (
                    <div className="lista-box" key={musica.youtube_id}>
                        <h1 className="lista-title">{musica.titulo}</h1>
                        <div className="lista-video">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${musica.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="lista-visualizacoes">
                            <p>{musica.visualizacoes} visualizações</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Lista;
