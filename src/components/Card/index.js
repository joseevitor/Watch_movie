import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import iconFavorite from './tofavorite.png';
import iconUnfavorite from './unfavorite.png';

function Card({id, title, capa}){
    const{favorite, addFavorite} = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconUnfavorite;
    return(
        <div className={styles.container}>
            <img src={capa} alt={title} className={styles.capa}/>
            <h2>{title}</h2>
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