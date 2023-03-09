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
    const json = JSON.stringify(valueHeader)
    async function salvarDadosH() {
        const res = await axios.post('http://localhost:3000/cadastroEstab', json, {

            headers: {
                'Content-Type': 'application/json'
            },

            body: json

        })
            .then(function (response) {
                console.log(response);
            })


    }
    return (
        <div>
            <M.Menu>
                <div className="menu-barra">
                    <form action="">
                        <input className='nomeEst' type="text" name="nomeEst" id='name' placeholder='Estabelicimento:' onChange={headerValues} />
                        <input className='endereco' type="text" name='Endereco' id='endereco' placeholder='Endereço:' onChange={headerValues} />
                        <select name="Turno" id="turno" onChange={headerValues}>
                            <option value="">Turno:</option>
                            <option value="M">Matutino</option>
                            <option value="V">Vespertino</option>
                            <option value="N">Noturno</option>
                        </select>
                        <select name="Area" id="area" onChange={headerValues}>
                            <option value="">Area:</option>
                            <option value="U">Urbana</option>
                            <option value="R">Rural</option>
                        </select>
                        <input name='ano' className='date-area' type="nubbem" placeholder='Ano:' onChange={headerValues} />

                    </form>
                </div>
            </M.Menu>
            <Formu salvar={salvarDadosH} />
        </div>
    )
}