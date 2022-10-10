import React, {useState, useEffect, useCallback} from 'react'
import MoviesList from './components/MoviesList'
import './App.css';
import AddMovies from './components/AddMovies';

function App() {

  const [movies, setMoivies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  
  //function for fetch data from swapi 
  const fetchMoviesHandler = useCallback(async function(){
    try {
      setIsLoading(true)
      const response = await fetch('https://swapi.py4e.com/api/films')
      if(!response.ok){
        throw new Error('Something went wrong !')
      }
      const data = await response.json()

      const mappedData = data.results.map((film)=>{
        return{
          id:film.episode_id,
          title:film.title,
          release_date:film.release_date,
          opening_crawl:film.opening_crawl,
          director: film.director,
          producer: film.producer,
        }
      })
      
      setMoivies(mappedData)
    } catch (error) {
      setIsError(error.message)
    }
    
    setIsLoading(false)
  }, [])
  
useEffect(()=>{
  fetchMoviesHandler()
}, [fetchMoviesHandler])

const addMovieHandler=(movie)=>{
  //Here you write code of sending post request
  console.log(movie)
}

let content = <p>No movies found !</p>

if(movies.length > 0){
  content = <MoviesList movies={movies} />
}
if(isLoading){
  content = <p>Loading.....</p>
}
if(isError != null){
  content = <p>{isError}</p>
}

  
  return (
    <>
    <section>
      <AddMovies onAddMovie={addMovieHandler}/>
    </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </>
  );
}

export default App;
