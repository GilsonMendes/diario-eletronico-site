import *as F from './form'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  }).required();


export default props => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
    resolver: yupResolver(schema)
  });

    const [values, setValues] = useState()
    console.log(values)
    const inputDate = (value) => {

        setValues(prevVelue => ({
            ...prevVelue,
            [value.target.name]: value.target.value,
        }));
    }
    // https://0829-2804-14d-5c32-81a0-88f9-60b-71a1-dbb1.sa.ngrok.io/

    //'http://localhost:3000/cadastroAlunos/'
    const json = JSON.stringify(values)
    const salvarDados = async () => {
        await axios.post('/', json, {

            headers: {
                'Content-Type': 'application/json'
            },

            body: json



        })

        toast.success("DADOS SALVOS COM SUCESSO!")
    }

    function limpar() {
        window.location.reload(true)
        return;
    }



    return (

        <F.Form>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className='form'>
                    <div className='areaAluno'>
                        <input
                            {...register('nome', { required: true })}
                            type="text" name='nome'
                            placeholder='Nome:'
                            className='inputNome'
                            onChange={inputDate}
                        />
                    
                        <select   {...register('genero', { required: true })} name="genero" id="sexo" className='selectSexo' onChange={inputDate}>
                            <option value="">Sexo:</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não binário">Não binário</option>
                            <option value="Agênero">Agênero</option>
                            <option value="Gênero fluído">Gênero fluído</option>
                            <option value="Travesti">Travesti</option>
                            <option value="Transexual">Transexual</option>
                            <option value="Intersexo">Intersexo</option>
                            <option value="Outro">Outro</option>
                        </select>
                        <input  {...register('dataDeNascimento', { required: true })} 
                        type="date" name='dataDeNascimento' 
                        className='inputDate' 
                        onChange={inputDate}/>
                        <input   {...register('idade', { required: true })} 
                        type="number" name='idade' 
                        max='100' placeholder='Idade:' 
                        className='inputIdade' 
                        onChange={inputDate}/>
                       
                    </div>

                    <div className='areaSituacao'>
                        <input  {...register('disciplina', { required: true })} 
                        type="text" name='disciplina' 
                        placeholder='Disciplina:' 
                        className='disciplina' 
                        onChange={inputDate}/>
                        
               
                        <input  {...register('nota', { required: true })} 
                        type="text" name='nota' 
                        placeholder='Nota:' 
                        className='inputNota' 
                        onChange={inputDate}/>
                        
                    
                        <select  {...register('situacaoFinal', { required: true })} name="situacaoFinal" id="situacaoFinal" className='selectSituacao' onChange={inputDate}>
                            <option value="">Situação Final:</option>
                            <option value="Aprovado">Aprovado</option>
                            <option value="Reprovado">Reprovado</option>
                        </select>
                        <button type="submit" onClick={
                            function (e) {
                                salvarDados()
                                /* props.salvar() */
                            }
                        }>Salvar</button>
                        <button className='btnLimpar' onClick={limpar}>Limpar</button>
                    </div>
                </div>
            </form>
        </F.Form >
    )
}