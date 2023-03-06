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
                    <input className='nomeEst' type="text" name ="Nome do Estabelicimento" id='name' placeholder='Estabelicimento:' onChange={headerValues} />
                    <input className='endereco' type="text" name='Endereco' id='endereco' placeholder='Endereço:' onChange={headerValues} />
                    <select name="Turno" id="turno" onChange={headerValues}>
                        <option value="">Turno:</option>
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                        <option value="Noturno">Noturno</option>
                    </select>
                    <select name="Área" id="area"  onChange={headerValues}>
                        <option value="">Area:</option>
                        <option value="Urbana">Urbana</option>
                        <option value="Rural">Rural</option>
                    </select>
                    <input name='Ano' className='date-area' type="month"  onChange={headerValues} />

                </form>
            </div>
            
        </M.Menu>
    )
}