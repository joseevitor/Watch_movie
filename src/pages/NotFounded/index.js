import styles from './NotFounded.module.css';

function NotFounded(){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>The content you are looking was not founded!</p>
        </section>
    )
}

export default NotFounded;