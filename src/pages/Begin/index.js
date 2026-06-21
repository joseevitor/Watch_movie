
import React from 'react';
import Cabecalho from "components/Cabecalho";
import Rodape from 'components/Rodape';
import Banner from "components/Banner"
import Title from 'components/Title';
import Card from 'components/Card';

function Begin() {
    console.log('Begin renderizado');
    
    return (
        <>
            <Cabecalho />
            <Banner image="home"/>
            <Title>
                <h1>A good place to keep your movies...</h1>
            </Title>
            <Card id='1' title= 'Arcane' capa='https://preview.redd.it/lore-spoilers-i-just-finished-arcane-in-8-hours-but-missed-v0-2tjhlxn9ca491.jpg?width=640&crop=smart&auto=webp&s=908222adc554d60c25509fe225a3cbfb36333e3d' />
            <Rodape />
        </>
    )
}

export default Begin;