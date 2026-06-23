import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import iconFavorite from './tofavorite.png';
import iconUnfavorite from './unfavorite.png';
import { Link } from 'react-router-dom';

function Card({id, title, capa}){
    const{favorite, addFavorite} = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconUnfavorite;
    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={title} className={styles.capa}/>
                <h2>{title}</h2>
            </Link>
            <img src={icon}
            alt="To favorite movie"
            className={styles.tofavorite} 
            onClick={() => {
                addFavorite({id, title, capa})
            }}/>
        </div>
    )
}

export default Card;