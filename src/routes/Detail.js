import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./Detail.module.css"

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? <h1>Loading..</h1> : <div>
                <div className={styles.image}>
                    <img src={movie.large_cover_image}/>
                </div>
                <div className={styles.contents}>
                    <h2 className={styles.title}>Title: {movie.title}</h2>
                    <h2 className={styles.genre}>Genre: {movie.genres.join(", ")}</h2>
                    <h2 className={styles.year}>Year: {movie.year}</h2>
                    <h2 className={styles.rating}>Rating: {movie.rating}</h2>
                    <h2 className={styles.runtime}>Runtime: {movie.runtime}</h2>
                    <h2 className={styles.description_title}>Description</h2>
                    <h3 className={styles.description}>{movie.description_full}</h3>
                </div>
            </div>}
        </div>
        
    );
}

export default Detail;