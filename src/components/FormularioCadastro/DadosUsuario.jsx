import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    // console.log(validacoes);

    return(
        <form onSubmit={event => {
            event.preventDefault();
            if(possoEnviar())
                aoEnviar({email, senha});
        }}>
            <TextField
                id='email'
                value={email}
                onChange={event => setEmail(event.target.value)}
                margin='normal'
                fullWidth
                name='email'
                label='email'
                type='email'
                required
            />
            <TextField
                id='senha'
                value={senha}
                onChange={event => setSenha(event.target.value)}
                onBlur={validarCampos}
                margin='normal'
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                fullWidth
                name='senha'
                label='senha'
                type='password'
                required
            />
            <Button variant='contained' color='primary' type='submit' >Próximo</Button>
        </form>
    )
}

export default DadosUsuario;
