import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './cards/cardAlunos'
import *as C from './style'
import { toast } from 'react-toastify';
import Header from '../header/header-top-primary';

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


    const excluirAluno = () => {
        axios.delete(`http://localhost:3000/cadastroAlunos/${viewTables.id}`)
        return toast.success("ALUNO DELETADO COM SUCESSO!")
    }



    return (

        <C.Container>
            <Header/>
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
                <button className='btn--controller' onClick={excluirAluno} >Excluir</button>
            </div>
        </C.Container>


    )
}