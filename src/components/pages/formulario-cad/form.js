import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 720px;
    margin: 0 auto;
    border: 3px solid gray;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-image: linear-gradient(rgb(166, 108, 245), rgb(97, 47, 165),rgb(71, 19, 141) );
      
    //header

    .menu-barra:focus-within{
        border: 1px solid rgb(9, 249, 245);
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    

    .menu-barra {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: -10px;
        width: 720px;
        height: 25px;
        background-color: gray;
        margin-bottom: 10px;
        
    }
    input{
        border: 0;
        outline: none;
    }
    select{
        border: 0;
        outline:none;
        padding-left: 10px;
    }

    .nomeEst{
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding-left: 8px;
        padding-right: 5px;  
    }

    .date-area{
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        padding-left: 8px;
        padding-right: 5px; 
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 720px;
        margin: 0 auto;
        height: 25px;
        background-color: gray;
    }

    //===========================================
    .areaAluno{
        margin: 0 auto;
    }

    .areaSituacao{
        margin: 0 auto;
    }
    .header-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 720px;
        margin: 0 auto;
        height: 25px;
        background-color: gray;
    }
    .form{
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
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    .selectSexo{
        margin-right:10px;
        border: 0;
        outline: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    .inputDate{
        margin-right: 10px;
        border: 0;
        outline: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    .inputIdade{
        width: 50px;
        border: 0;
        outline: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    .disciplina{
        margin-right: 10px;
        border: 0;
        outline: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;


    }

    .inputNota{
        width: 30px;
        margin-right: 10px;
        border: 0;
        outline: none;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    .selectSituacao{
        border: 0;
        outline: none;
        margin-right: 10px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    button{
        margin-right: 5px;
        height: 18px;
        border-radius: 3px;
        border: 0;

    }

    button:hover{
      background-color: gray;
      color: white;
    }

    .btnLimpar{
        margin-right:0;
    }

    .areaAluno:focus-within{
        box-shadow: 5px 5px 5px black;
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