import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Title from 'components/Title';
import Card from 'components/Card';

function Favorites() {
    return(
        <>
            <Banner image='favorites' />
            <Title>
                <h1>My Favorites</h1>
            </Title>
            <section className={styles.container}>
                <Card id='1' title= 'One Piece' capa='https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' />
            </section>
        </>
    )
}

export default Favorites;