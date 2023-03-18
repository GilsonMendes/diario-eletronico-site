import *as F from './form'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object({
    nomeEstabelecimento: yup.string().required(msnEstab),
    endereco: yup.string().required(msnEndereco),
    turno: yup.string().required(msnTurno),
    area: yup.string().required(msnArea),
    ano:yup.string().required(msnAno),
    nome: yup.string().required(msnNome),
    genero: yup.string().required(msnGenero),
    dataDeNascimento: yup.string().required(msnData),
    disciplina: yup.string().required(msnDisc),
    nota: yup.string().required(msnNota),
    situacaoFinal: yup.string().required(msnSFinal),

}).required();
function msnEstab() { toast.error("Digite o nome do estabelecimento!") }
function msnEndereco() { toast.error("Digite um endereço!") }
function msnTurno() { toast.error("Entre com um turno!") }
function msnArea() { toast.error("Selecione a área!") }
function msnAno() { toast.error("Entre com o ano atual!") }
function msnNome() { toast.error("Digite o nome do aluno!") }
function msnGenero() { toast.error("Selecione o genero do aluno!") }
function msnData() { toast.error("Digite uma data de nascimento!") }
function msnDisc() { toast.error("Digite a disciplina!") }
function msnNota() { toast.error("Digite uma nota!") }
function msnSFinal() { toast.error("Selecione a situação final!") }



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

                    <div className="menu-barra"> {/**Inicio form header */}

                        <input {...register('nomeEstabelecimento', { required: true })}
                            {...errors.nomeEstabelecimento && errors.nomeEstabelecimento?.message}

                            className='nomeEst'
                            type="text"
                            name="nomeEstabelecimento"
                            id='name'
                            placeholder='Estabelicimento:'
                            onChange={inputDate} />
                        <input {...register('endereco', { required: true })}
                            {...errors.endereco && errors.endereco?.message}
                            className='endereco'
                            type="text" name='endereco'
                            id='endereco'
                            placeholder='Endereço:'
                            onChange={inputDate} />
                        <select {...register('turno', { required: true })} name="turno" id="turno" onChange={inputDate}>
                            <option value="">Turno:</option>
                            <option value="M">Matutino</option>
                            <option value="V">Vespertino</option>
                            <option value="N">Noturno</option>
                            {errors.turno && errors.turno?.message}
                        </select>
                        <select {...register('area', { required: true })} name="area" id="area" onChange={inputDate}>
                            <option value="">Area:</option>
                            <option value="U">Urbana</option>
                            <option value="R">Rural</option>
                            {errors.turno && errors.turno?.message}
                        </select>
                        <input {...register('ano', { required: true })}
                            {...errors.area && errors.area?.message}
                            name='ano'
                            className='date-area'
                            type="number"
                            placeholder='Ano:'
                            onChange={inputDate} />

                    </div>
                    {/**Fim form header */}
                    <div className='areaAluno'>
                        <input
                            {...register('nome', { required: true })}
                            type="text" name='nome'
                            placeholder='Nome:'
                            className='inputNome'
                            onChange={inputDate}
                            {...errors.nome && errors.nome?.message}
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
                            {errors.genero && errors.genero?.message}
                        </select>
                        <input  {...register('dataDeNascimento', { required: true })}
                            {...errors.dataDeNascimento && errors.dataDeNascimento?.message}
                            type="date" name='dataDeNascimento'
                            className='inputDate'
                            onChange={inputDate} />
                        <input   {...register('idade', { required: true })}
                            type="number" name='idade'
                            max='100' placeholder='Idade:'
                            className='inputIdade'
                            onChange={inputDate} />


                    </div>



                    <div className='areaSituacao'>
                        <input  {...register('disciplina', { required: true })}
                            {...errors.disciplina && errors.disciplina?.message}
                            type="text" name='disciplina'
                            placeholder='Disciplina:'
                            className='disciplina'
                            onChange={inputDate} />


                        <input  {...register('nota', { required: true })}
                            {...errors.nota && errors.nota?.message}
                            type="text" name='nota'
                            placeholder='Nota:'
                            className='inputNota'
                            onChange={inputDate} />


                        <select  {...register('situacaoFinal', { required: true })} name="situacaoFinal" id="situacaoFinal" className='selectSituacao' onChange={inputDate}>
                            <option value="">Situação Final:</option>
                            <option value="Aprovado">Aprovado</option>
                            <option value="Reprovado">Reprovado</option>
                            {errors.situacaoFinal && errors.situacaoFinal?.message}
                        </select>
                        <button type="submit" onClick={
                            function (e) {
                                /*  salvarDados() */
                            }
                        }>Salvar</button>
                        <button className='btnLimpar' onClick={limpar}>Limpar</button>
                    </div>
                </div>
            </form>
        </F.Form >
    )
}