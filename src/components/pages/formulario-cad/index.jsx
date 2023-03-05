import *as F from './form'
export default props =>{
    return(
        <F.Form>
            <form action="">
                <input type="text" placeholder='Nome:' />
                <select name="sexo" id="sexo">
                    <option value="sexo">Sexo:</option>
                    <option value="maculino">M</option>
                    <option value="feminino">F</option>
                </select>
                <input type="date" />
                <input type="number" max='100' placeholder='Idade:'/>
                <input type="text" placeholder='Disciplina:'/>
                <input type="text" placeholder='Nota:' />
                <select name="situacao" id="situacao">
                    <option value="situacao">Situação Final:</option>
                    <option value="aprovado">Aprovado</option>
                    <option value="reprovado">Reprovado</option>
                </select>
            </form>
        </F.Form>
    )
}