import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../utils/movies-api';
import {
  MovieLayout,
  MovieTitle,
  OverviewTitle,
  Overview,
  GenresTitle,
  Genres,
  StyledBackLink,
} from './MovieDetails.styled';
import { Information } from 'components/Information/Information';
import { Loader } from 'components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const prevPage = useRef(location);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);

      try {
        const movieDetails = await fetchMovieDetailsById(movieId);
        setMovie(movieDetails);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <StyledBackLink to={prevPage.current.state?.from ?? '/'}>
            <span>&lArr; Go back</span>
          </StyledBackLink>
          <MovieLayout>
            <img
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg'
              }
              alt={movie.title}
              width="250"
            />

            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              <span>
                <b>User score: </b> {Math.ceil(movie.vote_average * 10)} %
              </span>
              <OverviewTitle>Overview</OverviewTitle>
              <Overview>{movie.overview}</Overview>
              <GenresTitle>Genres</GenresTitle>
              <Genres>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </Genres>
            </div>
            {isLoading && <Loader />}
          </MovieLayout>
          <Information />
          <Outlet />
        </>
      )}
    </>
  );
}
