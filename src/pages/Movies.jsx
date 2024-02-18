import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; 
import { toast } from 'react-hot-toast';
import { fetchMovieByName } from '../services/api';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import MovieList from '../components/MovieList/MovieList'; 
import { LoadingIndicator } from 'components/SharedLayout/LoadingDots';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);  
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        setIsLoading(true); 
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss(); 
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results); 
        }
      } catch (error) {
        setError(error.message);  
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query }); 
  };

  return (
    <main>
      <SearchMovies onSubmit={handleSubmit} />
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <MovieList trendingMovies={movies} />
      )}
    </main>
  );
};

export default Movies;