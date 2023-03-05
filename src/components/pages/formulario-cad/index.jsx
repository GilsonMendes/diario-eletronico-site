import *as F from './form'
export default props => {
    return (
        <F.Form>
            <form action="">
                <div className='areaAluno'>
                    <input type="text" placeholder='Nome:' className='inputNome' />
                    <select name="sexo" id="sexo" className='selectSexo'>
                        <option value="sexo">Sexo:</option>
                        <option value="maculino">M</option>
                        <option value="feminino">F</option>
                    </select>
                    <input type="date"  className='inputDate'/>
                    <input type="number" max='100' placeholder='Idade:' className='inputIdade' />
                </div>
                
                <div className='areaSituacao'>
                    <input type="text" placeholder='Disciplina:' className='disciplina' />
                    <input type="text" placeholder='Nota:' className='inputNota' />
                    <select name="situacao" id="situacao" className='selectSituacao'>
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