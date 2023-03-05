import styled from "styled-components";


export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 720px;
    margin: 0 auto;
    height: 25px;
    background-color: gray;

    
    .menu-barra:focus-within{
        border: 1px solid rgb(152, 68, 232);
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    

    .menu-barra form{
        display: flex;
        
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


`