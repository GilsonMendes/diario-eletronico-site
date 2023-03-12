import React, { useState, useEffect } from 'react';
import axios from 'axios'
/* import Card from './cards/cardAlunos' */

export default function alunos() {
    const [viewTables, setViewTables] = useState([]);
    const [idNumber, setIdNumber] = useState()
    console.log(idNumber)
    const inputDate = (value) => {

        setIdNumber(value.target.value);
    }

    const pegarDados = async () => {

        await axios.get('http://localhost:3000/cadastroAlunos/')
            .then(({ data }) => {
                setViewTables(data[idNumber].nome)
            })
    }



    console.log(viewTables)

    return (
        <div>
            <p>Nome:{viewTables}</p>
            <span>Id: </span>
            <input type="number"  name='ID' onChange={inputDate} />
            <button onClick={pegarDados}>Consultar</button>
        </div>


    )
}