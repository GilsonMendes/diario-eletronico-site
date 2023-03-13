import React, {useState} from "react";
import *as C from './card'

export default props => {
   
    return (
        <C.card>
            <div className="card">
                <div className="title">
                    <h1>Aluno</h1>
                </div>
                <div className="dadosAluno">
                    <p className="paragrafo">Nome do Aluno: {props.nome}</p>
                    <p className="paragrafo">Idade: {props.idade}</p>
                    <p className="paragrafo">Genero: {props.genero}</p>
                    <p className="paragrafo">Data de Nascimento: {props.dataNasc}</p>
                    <p className="paragrafo">Disciplina: {props.disciplina}</p>
                    <p className="paragrafo">Nota Final: {props.nota}</p>
                    <p className="paragrafo">Situação: {props.situacao}</p>
                </div>
             

            </div>
        </C.card>
    )
}