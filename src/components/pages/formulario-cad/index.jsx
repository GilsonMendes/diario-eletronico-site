import *as F from './form'
import React, { useState } from 'react'
export default props => {

    const [values, setValues] = useState()
    console.log(values);
    const inputDate = (value) => {

        setValues(prevVelue => ({
            ...prevVelue,
            [value.target.name]: value.target.value,
        }));
    }
    return (
        <F.Form>
            <form onSubmit={handleSubmit}>
                <div className='areaAluno'>
                    <input type="text" name='Nome' placeholder='Nome:' className='inputNome' onChange={inputDate} />
                    <select name="Sexo" id="sexo" className='selectSexo' onChange={inputDate}>
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
                    <input type="date" name='Data' className='inputDate' onChange={inputDate} />
                    <input type="number" name='Idade' max='100' placeholder='Idade:' className='inputIdade' onChange={inputDate} />
                </div>

                <div className='areaSituacao'>
                    <input type="text" name='Disciplina' placeholder='Disciplina:' className='disciplina' onChange={inputDate} />
                    <input type="text" name='Nota' placeholder='Nota:' className='inputNota' onChange={inputDate} />
                    <select name="Situacao" id="situacao" className='selectSituacao' onChange={inputDate}>
                        <option value="">Situação Final:</option>
                        <option value="aprovado">Aprovado</option>
                        <option value="reprovado">Reprovado</option>
                    </select>
                    <button type="submit">Salvar</button>
                    <button>Excluir</button>
                    <button className='btnLimpar'>Limpar</button>
                </div>
            </form>
        </F.Form >
    )
}