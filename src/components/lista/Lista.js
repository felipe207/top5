// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './Lista.css';

// const Lista = () => {
//     const [musicas, setMusicas] = useState([]);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchMusicas = async () => {
//         try {
//           const response = await axios.get("http://localhost:8000/api/musicas");
//           if (response.data.results) {
//             setMusicas(response.data.results);
            
//           } else {
//             setError("Nenhum resultado encontrado.");
//           }
//         } catch (err) {
//           setError(err.response?.data?.message || "Erro ao buscar músicas.");
//         }
//       };
  
//       fetchMusicas();
//     }, []);

//     function formatViews(views) {
//         if (views >= 1000000) {
//             return `${(views / 1000000).toFixed(1).replace('.', ',')} M`;
//         } else if (views >= 1000) {
//             return `${(views / 1000).toFixed(1).replace('.', ',')} K`;
//         }
//         return views.toString();
//     };

//     return (
//         <div className="lista-container">
//             <div className="lista-header">
//                 <h1 className="lista-title-1">Ranking Atual</h1>
//             </div>
//             {musicas.map((musica) => {
//                 return (
//                     <div className="lista-box" key={musica.youtube_id}>
//                         <div className="lista-thumb">
//                             <h1 className="numero-ranking">{musicas.indexOf(musica) + 1}</h1>
//                         </div>
//                         <div className="lista-visualizacoes">
//                             <h1 className="lista-title">{musica.titulo}</h1>
//                             <p>{formatViews(musica.visualizacoes)} visualizações</p>
//                         </div>
//                         <div className="lista-video">
//                             <iframe className="iframe-video" 
//                             src={`https://www.youtube.com/embed/${musica.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Lista;
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Lista.css';

const Lista = () => {
    const [musicas, setMusicas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [error, setError] = useState(null);

    const fetchMusicas = async (page = 1) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/musicas?page=${page}`);
            const { data, pagination } = response.data.results;
            console.log('data:', data)
            setMusicas(data);
            setCurrentPage(pagination.current_page);
            setLastPage(pagination.last_page);
        } catch (err) {
            setError(err.response?.data?.message || "Erro ao buscar músicas.");
        }
    };

    useEffect(() => {
        fetchMusicas();
    }, []);

    const formatViews = (views) => {
        if (views >= 1000000) {
            return `${(views / 1000000).toFixed(1).replace('.', ',')} M`;
        } else if (views >= 1000) {
            return `${(views / 1000).toFixed(1).replace('.', ',')} K`;
        }
        return views.toString();
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= lastPage) {
            fetchMusicas(page);
        }
    };

    return (
        <div className="lista-container">
            <div className="lista-header">
                <h1 className="lista-title-1">Ranking Atual</h1>
            </div>
            {error && <p className="error">{error}</p>}
            {musicas.map((musica, index) => (
                <div className="lista-box" key={musica.youtube_id}>
                    <div className="lista-thumb">
                        <h1 className="numero-ranking">{index + 1 + (currentPage - 1) * 10}</h1>
                    </div>
                    <div className="lista-visualizacoes">
                        <h1 className="lista-title">{musica.titulo}</h1>
                        <p>{formatViews(musica.visualizacoes)} visualizações</p>
                    </div>
                    <div className="lista-video">
                        <iframe
                            className="iframe-video"
                            src={`https://www.youtube.com/embed/${musica.youtube_id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ))}
            <div className="pagination">
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span className="pagination-info">
                    Página {currentPage} de {lastPage}
                </span>
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === lastPage}
                >
                    Próxima
                </button>
            </div>
        </div>
    );
};

export default Lista;
