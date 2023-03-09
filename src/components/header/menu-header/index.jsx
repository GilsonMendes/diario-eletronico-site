import React, { useState } from 'react';
import *as M from './menu-header'
import Formu from '../../pages/formulario-cad';
import axios from 'axios'
export default props => {

    const [valueHeader, setValueHeader] = useState()
     console.log(valueHeader)
    const headerValues = (value) => {
        setValueHeader(prevValues => ({

            ...prevValues,
            [value.target.name]: value.target.value

        }))
    }
    const jsonH = JSON.stringify(valueHeader)
    async function salvarDadosH() {
        const res = await axios.post('http://localhost:3000/cadastroEstab/', jsonH, {

            headers: {
                'Content-Type': 'application/json'
            },

            body: jsonH

        })
            .then(function (response) {
                console.log(response);
            })


    }
    return (
        <div>
            <M.Menu>
                <div className="menu-barra">
                        <input className='nomeEst' type="text" name="nomeEstabelecimento" id='name' placeholder='Estabelicimento:' onChange={headerValues} />
                        <input className='endereco' type="text" name='endereco' id='endereco' placeholder='Endereço:' onChange={headerValues} />
                        <select name="turno" id="turno" onChange={headerValues}>
                            <option value="">Turno:</option>
                            <option value="M">Matutino</option>
                            <option value="V">Vespertino</option>
                            <option value="N">Noturno</option>
                        </select>
                        <select name="area" id="area" onChange={headerValues}>
                            <option value="">Area:</option>
                            <option value="U">Urbana</option>
                            <option value="R">Rural</option>
                        </select>
                        <input name='ano' className='date-area' type="number" placeholder='Ano:' onChange={headerValues} />
                </div>
            </M.Menu>
            <Formu salvar={salvarDadosH} />
        </div>
    )
}