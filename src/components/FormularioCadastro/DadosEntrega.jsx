import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({cep, endereco, numero, cidade, estado});
        }}>
            <TextField
                value={cep}
                onChange={event => setCep(event.target.value)}
                id='cep' margin='normal'  label='CEP' type='number' name='cep'
            />
            <TextField
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
                id='endereco' margin='normal' fullWidth label='Endereco' name='endereco'
                type='text'
            />
            <TextField
                value={numero}
                onChange={event => setNumero(event.target.value)}
                id='numero' margin='normal'  label='Número' type='number' name='numero'
            />
            <TextField
                value={cidade}
                onChange={event => setCidade(event.target.value)}
                id='cidade' margin='normal'  label='Cidade' name='cidade'
                type='text'
            />
            <TextField
                value={estado}
                onChange={event => setEstado(event.target.value)}
                id='estado' margin='normal'  label='Estado' name='estado'
                type='text'
            />
            <Button variant='contained' color='primary' fullWidth type='submit'>Finalizar cadastro</Button>
        </form>
    )
}

export default DadosEntrega;
