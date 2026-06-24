import Title from 'components/Title';
import styles from './Player.module.css';
import Banner from 'components/Banner';
import { useParams } from 'react-router-dom';
import NotFounded from 'pages/NotFounded';
import { useEffect, useState } from 'react';
//import videos from 'json/db.json';


function Player(){
    const [video, setVideo] = useState();
    const parameters = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/joseevitor/Watch_movie-api/videos?id=${parameters.id}`)
            .then(answer => answer.json())
            .then(data => {
                setVideo(...data)
            })
    }, [parameters.id])

    if(!video) {
        return <NotFounded />
    }

    
    return(
        <>
            <Banner image="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.title}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}


export default Player;