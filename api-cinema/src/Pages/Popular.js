import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Spinner from "react-bootstrap/Spinner";

const genresMap = {
  28: "Ação",
  12: "Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  14: "Fantasia",
  36: "História",
  27: "Terror",
  10402: "Música",
  9648: "Mistério",
  10749: "Romance",
  878: "Ficção Científica",
  10770: "Cinema TV",
  53: "Thriller",
  10752: "Guerra",
  37: "Faroeste",
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNTk3MzYwNi42NDc2NTksInN1YiI6IjY2ZTA0MzE2NWEyZDUwZDc4YzhhM2Q5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oDbLi6bIZpq9YdBATvPxDUukc0Q32xnb4M6-umFp-SI",
  },
};

function formatDateToBR(dateString) {
  const date = parseISO(dateString);
  return format(date, "dd/MM/yyyy", { locale: ptBR });
}

function Popular() {
  // Estado para controlar a página atual
  const [page, setPage] = useState(1);

  // Atualize a URL da API com base na página atual
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`,
    options
  );

  // Função para avançar para a próxima página
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Função para voltar para a página anterior
  const prevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5 pt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Filmes Populares</h1>

      <div className="row">
        {data.results.map((movie) => (
          <div className="col-md-4 mb-4 card-group" key={movie.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-4">{movie.title}</h5>
                <p className="card-text">
                  Data de Lançamento: {formatDateToBR(movie.release_date)}
                </p>
                <p className="card-text">
                  Gêneros:{" "}
                  {movie.genre_ids
                    .map((id) => genresMap[id])
                    .join(", ")}
                </p>
                <p className="card-text">Synopsis: {movie.overview}</p>
                <p className="card-text mt-auto">
                  Nota: <span>{movie.vote_average}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de Paginação */}
      <div className="d-flex justify-content-center align-items-center m-4 gap-5">
        <button
          className="btn btn-secondary"
          onClick={prevPage}
          disabled={page === 1} // Desabilita o botão de voltar na página 1
        >
         <i className="bi bi-caret-left"></i>
        </button>
        <button className="btn btn-primary d-flex justify-content-center align-items-center" onClick={nextPage}>
           <i className="bi bi-caret-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Popular;
