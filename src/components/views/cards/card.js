import styled from "styled-components";


export const card = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    width: 720px;
    margin: 0 auto;
    background-image: linear-gradient(rgb(166, 108, 245), rgb(97, 47, 165),rgb(71, 19, 141) );
    border: 3px solid rgb(133, 137, 135) ;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    /* display: flex;
    width: 720px;
    margin: 0 auto;
    
    align-items: center;
    justify-content: center;
    border: 3px solid rgb(133, 137, 135) ;
    background-color: rgb(160, 250, 215);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; */


    .title{
        display: flex;
        font-size: 20px;
        color: white;
        font-weight: 700;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        width: 720px;
        align-items: center;
        justify-content: center;
        border: 0;
        height: 25px;
        background-color: rgb(133, 137, 135);
    }

    .dadosAluno{
        padding: 5px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Roboto';
        margin-top: 15px;
        margin-left: 20px;
        color: '#403F3F';

    }

    .dadosAluno{
        padding: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    
    .numberId{
        width: 60px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .btnConsul{
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .paragrafo{
        color: white;
    }

    h1{
        font-family: 'Roboto';
        margin-bottom: 3px;
    }



`