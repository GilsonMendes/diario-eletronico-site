import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 720px;
    margin: 0 auto;
    background-image: linear-gradient(rgb(166, 108, 245), rgb(97, 47, 165),rgb(71, 19, 141) );

    form{
       display: grid;
       justify-items:start;
       margin: 10px;
    }
    
    .inputNome{
        border: 0;
        outline: none;
        width: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .selectSexo{
        margin-right:10px;
        border: 0;
        outline: none;
    }

    .inputDate{
        margin-right: 10px;
        border: 0;
        outline: none;
    }

    .inputIdade{
        width: 50px;
        border: 0;
        outline: none;
    }

    .disciplina{
        margin-right: 10px;
        border: 0;
        outline: none;

    }

    .inputNota{
        width: 30px;
        margin-right: 10px;
        border: 0;
        outline: none;
    }

    .selectSituacao{
        border: 0;
        outline: none;
        margin-right: 10px;
    }

    button{
        margin-right: 5px;
        height: 18px;
        border-radius: 3px;
        border: 0;

    }
    .btnLimpar{
        margin-right:0;
    }

    .areaAluno:focus-within{
        border: 2px solid rgb(185, 190, 191);
        box-shadow: 10px 5px 5px black;
        height: 17px;
        margin-bottom: 10px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    .areaSituacao:focus-within{
        box-shadow: 5px 5px 5px black;
        height: 17px;
        margin-bottom: 10px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }
`