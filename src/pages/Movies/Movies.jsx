import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFilm } from 'services/fetchFilm';
import { Link } from 'react-router-dom';

const ListOfFilm = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #000000;
  color: #f5e614;
  text-decoration: none;

  li {
    font-size: 18px;
    font-weight: 600;
    list-style: none;
    text-decoration: none;
  }
`;

const InputWrapper = styled.form`
  background-color: #f5e614;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  list-style: none;
  input {
    text-decoration: none;
    margin-left: 15px;
    margin-top: 5px;
  }
  label {
    text-decoration: none;
    color: #000000;
  }
`;

const Container = styled.section`
  padding: 20px;
  background: #000000;
  list-style: none;
  text-decoration: none;
`;

const ErrorText = styled.p`
  margin-top: 20px;
  color: yellow;
  text-decoration: none;
`;

const Movies = () => {
  const [searchFilm, setSearchFilm] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const location = useLocation();
  const filmName = searchFilm.get('filmName') ?? '';

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const date = await getFilm(filmName);
        const films = date.results;

        if (!films.length && filmName !== '') {
          setError(`Фільми зі словом ${filmName} не знайдені`);
          setFilms([]);
          setStatus('rejected');
        } else {
          setFilms(films);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFilm();
  });

  const updateSearch = event => {
    const filmNameValue = event.target.value;
    if (filmNameValue === '') {
      return setSearchFilm({});
    }
    setSearchFilm({ filmName: filmNameValue });
  };

  return (
    <Container>
      <InputWrapper>
        <input type="text" value={filmName} onChange={updateSearch} />
      </InputWrapper>

      {status === 'rejected' && <ErrorText>{error}</ErrorText>}

      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListOfFilm>
    </Container>
  );
};

export default Movies;