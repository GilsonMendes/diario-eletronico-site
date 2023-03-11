import React, {useState, useEffect } from 'react';
import axios from 'axios'

export default props => {
    const [viewTables, setViewTables] = useState();

    const pegarDados = () => {
        useEffect(async () => {
            await axios.get(

                'http://localhost:3000/cadastroAlunos/'

            ).then(function (response) {
                setViewTables(response.data)

            })
        }, [])

    }
    return (
        <div>
            <h1>View DB tables</h1>
        </div>
    )
}