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
            <form action="">
                <div className='areaAluno'>
                    <input type="text" name='Nome' placeholder='Nome:' className='inputNome' onChange={inputDate} />
                    <select name="Sexo" id="sexo" className='selectSexo' onChange={inputDate}>
                        <option value="sexo">Sexo:</option>
                        <option value="maculino">M</option>
                        <option value="feminino">F</option>
                    </select>
                    <input type="date" name='Data' className='inputDate' onChange={inputDate} />
                    <input type="number" name='Idade' max='100' placeholder='Idade:' className='inputIdade' onChange={inputDate} />
                </div>

                <div className='areaSituacao'>
                    <input type="text" name='Disciplina' placeholder='Disciplina:' className='disciplina' onChange={inputDate} />
                    <input type="text" name='Nota' placeholder='Nota:' className='inputNota' onChange={inputDate} />
                    <select name="Situacao" id="situacao" className='selectSituacao' onChange={inputDate}>
                        <option value="situacao">Situação Final:</option>
                        <option value="aprovado">Aprovado</option>
                        <option value="reprovado">Reprovado</option>
                    </select>
                    <button>Slavar</button>
                    <button>Excluir</button>
                    <button className='btnLimpar'>Limpar</button>
                </div>
            </form>
        </F.Form >
    )
}