import { useState, useEffect } from "react";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from './Begin.module.css';
//import videos from 'json/db.json';

function Begin() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/joseevitor/Watch_movie-api/videos')
            .then(answer => answer.json())
            .then(data => {
                setVideos(data)
            })
    }, [])
    
    return (
        <>
            <Banner image="home"/>
            <Title>
                <h1>A good place to keep your animes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Begin;