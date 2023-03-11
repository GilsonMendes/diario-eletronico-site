import React, { useState, useEffect } from 'react';
import axios from 'axios'
/* import Card from './cards/cardAlunos' */

export default props => {
    const [viewTables, setViewTables] = useState();



    /**
     * createdAt
: 
"2023-03-09T23:51:59.000Z"
dataDeNascimento
: 
"1985-12-01T00:00:00.000Z"
disciplina
: 
"Matematica"
genero
: 
"maculino"
id
: 
1
idade
: 
37
nome
: 
"Gilson Mendes da Silva"
nota
: 
10
situacaoFinal
: 
"aprovado"
updatedAt
: 
"2023-03-09T23:51:59.000Z"
     */
    console.log(viewTables)
    const pegarDados = async () => {
        const valueGet = await axios.get(

            'http://localhost:3000/cadastroAlunos/'

        ).then(function (response) {
            setViewTables(response.data)

        })

    }
    
    return (
        <div>
          

            <button onClick={pegarDados}>Consultar</button>
        </div>
    )
}