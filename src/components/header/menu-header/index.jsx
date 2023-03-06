import *as M from './menu-header'
export default _ => {
    return (
        <M.Menu>
            <div className="menu-barra">
                <form action="">
                    <input className='nomeEst' type="text" name ="nomeEst" id='name' placeholder='Estabelecimento:' />
                    <input className='endereco' type="text" name='endereco' id='endereco' placeholder='Endereço:' />
                    <select name="turno" id="turno">
                        <option value="">Turno:</option>
                        <option value="M">Matutino</option>
                        <option value="V">Vespertino</option>
                        <option value="N">Noturno</option>
                    </select>
                    <select name="area" id="area">
                        <option value="">Area:</option>
                        <option value="U">Urbana</option>
                        <option value="R">Rural</option>
                    </select>
                    <input className='date-area' type="month"  />

                </form>
            </div>
            
        </M.Menu>
    )
}