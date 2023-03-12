import React, { useState, useEffect } from 'react';
import axios from 'axios'
/* import Card from './cards/cardAlunos' */

export default function alunos() {
    const [viewTables, setViewTables] = useState();

     const json = JSON.stringify(viewTables)
    /*  const [idNumber, setIdNumber] = useState()
     console.log(idNumber)
     const inputDate = (value) => {
 
         setIdNumber(value.target.value);
     } */



    const pegarDados = () => {

        axios.get('http://localhost:3000/cadastroAlunos/')
            .then(({ data }) => {
                setViewTables(data)
               
            })

    }

    console.log(viewTables)

    return (
        <div>

           

            <button onClick={pegarDados}>Consultar</button>
        </div>


    )
}