import styled from "styled-components";

export const card = styled.div `
    display: flex;
    width: 600px;
    margin: 0 auto;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border: 3px solid rgb(133, 137, 135) ;
    background-color: rgb(160, 250, 215);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;


    .title{
        display: flex;
        font-size: 30px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;
        font-weight: 700;
        width: 600px;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: rgb(133, 137, 135);
    }

    .dadosAluno{
        padding: 5px;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
    .btnExc{}


`