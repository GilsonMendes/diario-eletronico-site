import * as H from './header-primary'
import { Link } from 'react-router-dom';
export default _ => {
    return (
        <H.Container>
            <div>
                <h1>ATA DE RESULTADOS FINAIS DO ANO LETIVO</h1>
                <div className='area--buttom'>
                    <Link to='/home' className='btnHome'>HOME</Link>
                    <Link to='/card' className='btnAlunos'>ALUNOS</Link>
                </div>
            </div>
        </H.Container>
    )
}