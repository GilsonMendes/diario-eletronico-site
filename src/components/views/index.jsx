import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './cards/cardAlunos'
import *as C from './style'

export default function alunos() {
    const [viewTables, setViewTables] = useState({});

    const [idNumber, setIdNumber] = useState()
    const inputDate = (value) => {

        setIdNumber(value.target.value);
    }

    let id = 0;



    useEffect(() => {
        axios.get('http://localhost:3000/cadastroAlunos/')
            .then(({ data }) => {
                setViewTables(data[idNumber === undefined ? id :
                    idNumber
                ])
            })
    }, [idNumber])



    return (

        <C.Container>
            {

                <Card
                    nome={viewTables.nome}
                    idade={viewTables.idade}
                    genero={viewTables.genero}
                    dataNasc={viewTables.dataDeNascimento}
                    disciplina={viewTables.disciplina}
                    nota={viewTables.nota}
                    situacao={viewTables.situacaoFinal}
                />

            }
            <div className='area--controller'>
                <input type="number" placeholder='Id:' onChange={inputDate} />
                <button className='btn--controller'>Excluir</button>
            </div>
        </C.Container>


    )
}