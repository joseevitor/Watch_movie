
import React from 'react';
import Banner from "components/Banner"
import Title from 'components/Title';
import Card from 'components/Card';
import videos from 'json/db.json';
import styles from './Begin.module.css'

function Begin() {
    console.log('Begin renderizado');
    
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