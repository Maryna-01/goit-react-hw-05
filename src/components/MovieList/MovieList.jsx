import { Link, useLocation } from "react-router-dom";

import styles from "./MovieList.module.css"

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={styles.movieList}>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link
                        to={`/movies/${movie.id}`}
                        state={{ from: location }}
                    >
                        <p>{movie.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
