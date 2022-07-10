import PropTypes from "prop-types"

function Movie({coverImg, title, summary, genre}){
    return (
      <div>
        <img src={medium_cover_image} alt={title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
          {genre?.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>);
}

Movie.PropTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;