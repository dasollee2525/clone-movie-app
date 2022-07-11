import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"

function Movie({id, coverImg, title, summary, genre}){
    return (
      <div className={styles.movie}>
        <img className={styles.movie_img} src={coverImg} alt={title}/>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
        <ul className={styles.movie_genres}>
          {genre?.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;