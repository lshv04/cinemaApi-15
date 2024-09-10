
import useFetch from '../Hooks/useFetch';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzgyYmRhY2FjYjkzYzAyM2M3Y2M3OTRmOTA2OWIwNiIsIm5iZiI6MTcyNTk3MzYwNi42NDc2NTksInN1YiI6IjY2ZTA0MzE2NWEyZDUwZDc4YzhhM2Q5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oDbLi6bIZpq9YdBATvPxDUukc0Q32xnb4M6-umFp-SI'
  }
};

function Popular() {
  const { data, loading, error } = useFetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div className="container mt-4">
      <h1 className='text-center mb-4'>Popular Movies</h1>
      <div className="row">
        {data.results.map(movie => (
          <div className="col-md-4 mb-4 card-group" key={movie.id}>
            <div className="card " >
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="card-img-top" 
                alt={movie.title} 
              />
                <div className="card-body d-flex justify-content-between flex-column">
                <div>
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    Release Date: {movie.release_date}
                  </p>
               
                <p className="card-text">Sinópse: {movie.overview}</p>
                </div>
                <p className="card-text mt-4">Rating:  <span>{movie.vote_average}</span> </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;