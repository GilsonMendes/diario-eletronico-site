import React, { useState, useEffect } from 'react';
import axios from 'axios'
/* import Card from './cards/cardAlunos' */

export default props => {
    const [viewTables, setViewTables] = useState();
    const obj = JSON.stringify(viewTables)
   


    const pegarDados = async () => {
        await axios.get('http://localhost:3000/cadastroAlunos/')
        .then(({data}) =>{
            setViewTables(data)
        })
         
        
    }

    
    
    return (
        <div>

            <p>{obj}</p>
          

            <button onClick={pegarDados}>Consultar</button>
        </div>
    )
}