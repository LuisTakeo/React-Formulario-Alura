import React, { useState, useContext } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material/';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar())
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    // necessário ter a variavel temporaria para controlar o value no input
                    let tempNome = event.target.value;
                    // if(tempNome.length >= 3){
                    //     tempNome = tempNome.substring(0, 3);
                    // }
                    setNome(tempNome);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                fullWidth
                margin='normal'
                name='nome'
                id="nome"
                label="nome"
            />
            <TextField
                fullWidth
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                margin='normal'
                name='sobrenome'
                id="sobrenome"
                label="sobrenome"
            />
            <TextField
                fullWidth
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                margin='normal'
                id="CPF"
                name='cpf'
                label="CPF"
                type='number'
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                />
            <FormControlLabel
                control={
                    <Switch onChange={event => {
                            setPromocoes(event.target.checked);
                        }}
                        checked={promocoes}
                        // defaultChecked={promocoes}
                        name='promocoes'
                    />
                }
                label="Promoções"
            />
            <FormControlLabel
                control={<Switch onChange={event => {
                    setNovidades(event.target.checked);
                }} checked={novidades} name='novidades' />}
                label="Novidades"
            />
            <Button variant='contained' color='primary' type='submit'>Próximo</Button>
        </form>
    )
}

export default DadosPessoais;
