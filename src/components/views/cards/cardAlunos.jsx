import React from "react";

export default props =>{
    return(
        <div>
            <h1>Alunos</h1>
            <p>Nome do Aluno: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Genero: {props.genero}</p>
            <p>Data de Nascimento: {props.dataNasc}</p>
            <p>Disciplina: {props.disciplina}</p>
            <p>Nota Final: {props.nota}</p>
            <p>Situação: {props.situacao}</p>

        </div>
    )
}