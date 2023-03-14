import *as F from './form'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
export default props => {

    const [values, setValues] = useState()
    console.log(values)
    const inputDate = (value) => {

        setValues(prevVelue => ({
            ...prevVelue,
            [value.target.name]: value.target.value,
        }));
    }
    const json = JSON.stringify(values)
    const salvarDados = async () => {
        await axios.post('http://localhost:3000/cadastroAlunos/', json, {

            headers: {
                'Content-Type': 'application/json'
            },

            body: json

            

        })

        toast.success("DADOS SALVOS COM SUCESSO!")
    }


    return (

        <F.Form>
            <div className='form'>
                <div className='areaAluno'>
                    <input type="text" name='nome' placeholder='Nome:' className='inputNome' onChange={inputDate} />
                    <select name="genero" id="sexo" className='selectSexo' onChange={inputDate}>
                        <option value="">Sexo:</option>
                        <option value="maculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="nb">Não binário</option>
                        <option value="ag">Agênero</option>
                        <option value="gf">Gênero fluído</option>
                        <option value="tv">Travesti</option>
                        <option value="ts">Transexual</option>
                        <option value="in">Intersexo</option>
                        <option value="ot">Outro</option>
                    </select>
                    <input type="date" name='dataDeNascimento' className='inputDate' onChange={inputDate} />
                    <input type="number" name='idade' max='100' placeholder='Idade:' className='inputIdade' onChange={inputDate} />
                </div>

                <div className='areaSituacao'>
                    <input type="text" name='disciplina' placeholder='Disciplina:' className='disciplina' onChange={inputDate} />
                    <input type="text" name='nota' placeholder='Nota:' className='inputNota' onChange={inputDate} />
                    <select name="situacaoFinal" id="situacaoFinal" className='selectSituacao' onChange={inputDate}>
                        <option value="">Situação Final:</option>
                        <option value="aprovado">Aprovado</option>
                        <option value="reprovado">Reprovado</option>
                    </select>
                    <button type="submit" onClick={
                        function (e) {
                            salvarDados()
                            props.salvar()
                        }
                    }>Salvar</button>
                    <button>Excluir</button>
                    <button className='btnLimpar'>Limpar</button>
                </div>
            </div>
        </F.Form >
    )
}