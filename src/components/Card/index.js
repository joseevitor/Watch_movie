import styles from './Card.module.css';
import favoriteIcon from './tofavorite.png';

function Card({id, title, capa}){
    return(
        <div className={styles.container}>
            <img src={capa} alt={title} className={styles.capa}/>
            <h2>{title}</h2>
            <img src={favoriteIcon}
            alt="To favorite movie"
            className={styles.tofavorite} />
        </div>
    )
}

export default Card;