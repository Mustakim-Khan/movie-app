import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const API_KEY = '6eafa0731c30e9c981c386f99cb87df2';

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    const data = await res.json();
    setMovies(data.results);
    console.log(movies);
  }

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <button type="submit">Search</button>
      <div className="page-button">
        <button onClick={setPage(page-1)}>Previous</button>
        <button onClick={setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
