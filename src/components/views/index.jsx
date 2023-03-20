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
    
    const id = 0 ;
    

    console.log("Id do DB ",viewTables.id)




    useEffect(() => {
        axios.get('http://168.194.65.117:3000/cadastroAlunos/')
            .then(({ data }) => {
                setViewTables(data[idNumber === undefined ? id :
                    idNumber
                ])     
            })
            
    }, [idNumber])


    const excluirAluno = () => {
        axios.delete(`http://168.194.65.117:3000/cadastroAlunos/${viewTables.id}`)
        return toast.success("ALUNO DELETADO COM SUCESSO!")
    }

   
    
    


    return (

        <C.Container>
            <Header />
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
                <input min={0} type="number" placeholder='Id:' onChange={inputDate} />
                <button className='btn--controller' onClick={excluirAluno} >Excluir</button>
            </div>
        </C.Container>


    )
}