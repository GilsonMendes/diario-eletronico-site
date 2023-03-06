import React, {useState} from 'react';
import *as M from './menu-header'
export default _ => {

    const [valueHeader, setValueHeader] = useState()
     console.log(valueHeader)
    const headerValues =(value)=>{
        setValueHeader(prevValues => ({

            ...prevValues,
            [value.target.name] : value.target.value

        }))
    }
    
    return (
        <M.Menu>
            <div className="menu-barra">
                <form action="">
                    <input className='nomeEst' type="text" name ="nomeEst" id='name' placeholder='Estabelicimento:' />
                    <input className='endereco' type="text" name='endereco' id='endereco' placeholder='Endereço:' />
                    <select name="turno" id="turno">
                        <option value="turno">Turno:</option>
                        <option value="M">Matutino</option>
                        <option value="V">Vespertino</option>
                        <option value="noturno">Noturno</option>
                    </select>
                    <select name="area" id="area">
                        <option value="area">Area:</option>
                        <option value="U">Urbana</option>
                        <option value="R">Rural</option>
                    </select>
                    <input name='Ano' className='date-area' type="month"  onChange={headerValues} />

                </form>
            </div>
            
        </M.Menu>
    )
}