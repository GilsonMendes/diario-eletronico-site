import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from './cards/cardAlunos'

export default function alunos() {
    const [viewTables, setViewTables] = useState({});
    /*  const [idNumber, setIdNumber] = useState()
     console.log(idNumber)
     const inputDate = (value) => {
 
         setIdNumber(value.target.value);
     } */



    useEffect(() => {
        axios.get('http://localhost:3000/cadastroAlunos/')
            .then(({data}) => {
                setViewTables(data[length])
            })
    }, [])

    
   
    return (
        
           <div>
            {
                
                    <Card 
                    nome= {viewTables.nome}
                    idade = {viewTables.idade}
                    genero = {viewTables.genero}
                    dataNasc = {viewTables.dataDeNascimento}
                    disciplina = {viewTables.disciplina}
                    nota = {viewTables.nota}
                    situacao = {viewTables.situacaoFinal}
                    />
                 
            }
           </div>
           
      
    )
}