import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(rgb(166, 108, 245), rgb(97, 47, 165),rgb(71, 19, 141) );

    .area--buttom{
        display: flex; 
        align-items: center;
        width: 1080px;
        justify-content: space-around;
    }

    .btnHome{
        color: white;
        margin-top: 10px;
        border: 1px solid white;
        padding: 10px;
        font-size: 15px;
        font-family: 'Roboto';
        font-weight: 500;
        border-radius: 10px;
        text-decoration: none;
    }

    .btnHome:hover{
        background-color: rgb(128, 128, 128);
    }


    .btnAlunos{
        color: white;
        margin-top: 10px;
        border: 1px solid white;
        padding: 10px;
        font-size: 15px;
        font-family: 'Roboto';
        font-weight: 500;
        border-radius: 10px;
        text-decoration: none;
    }
    .btnAlunos:hover{
        background-color: rgb(128, 128, 128);
    }
   
`