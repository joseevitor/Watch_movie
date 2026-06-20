
import React from 'react';
import Cabecalho from "components/Cabecalho";
import Rodape from 'components/Rodape';

function Begin() {
    console.log('Begin renderizado');
    
    return (
        <>
            <Cabecalho />
            <Rodape />
        </>
    );
}

export default Begin;