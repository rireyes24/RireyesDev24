import React from 'react';
import styled, { css } from 'styled-components';
import { Networks } from '../Networks';
import { Tecnologies } from '../Tecnologies';
import Rireyes_Light from '/Rireyes_Light.svg';
import { keyframes } from 'styled-components';
import background_dark from '/background-header.jpg';

const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    height: 562px;
    display: grid; 
    grid-template-columns: 60% 40%;
    grid-template-rows: 20% 80%;
    overflow: hidden;
    padding-top: 42px;
    background-color: #0c0c0c;
    background-image: url(${background_dark});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 768px){
      height: auto;
      min-height: 552px;
      grid-template-columns: 50% 50%;
      grid-template-rows: 15% 10% 45% 30%;
    }
`;

const Logo = styled.span`
    width: 250px;
    height: 78px;    
    background-image: url(${Rireyes_Light});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;  
    justify-self: start;  
    margin-left: 60px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @media (max-width: 768px){
      grid-column: 1 / 3;
      grid-row: 1 / 2;        
      margin-left: 0px;
      justify-self: center;  

    }
`;

// Crear el keyframe para la animación
const moveRightAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const PhotoPortfolio = styled.div`
    position: relative;    
    width: 400px;
    height: 360px;
    align-self: end;
    justify-self: flex-end;
    border-radius: 100px 0px 0px 0px;  

    background-image: url('https://res.cloudinary.com/dejj8n6g7/image/upload/v1688782169/NewPortfolio2024/20230702_105424_hkmuta.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    grid-column: 2 / 3;
    grid-row: 2 / 3;

  
    @media (max-width: 768px){
        width: 182px;
        height: 182px;
        grid-column: 1 / 3;
        grid-row: 4 / 5;   
        border-radius: 40px 0px 0px 0px;    
        margin-top: 42px; 
    }
`;

const Div2 = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    @media (max-width: 768px){
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      padding-top: 10px;
    }

`;

const texto = styled.p`
    width: 100%;
    height: 54px;
    font-size: 1.8rem;
    letter-spacing: 1px;
    color: white;
    display: grid;
    justify-content: start;
    padding-left: 52px;
    margin-bottom: 20px;
     /* Animación */
     animation: ${moveRightAnimation} 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

    opacity: 0; /* Inicialmente invisible */


    @media (max-width: 768px){      
      padding: 0;
      margin-bottom: 48px;
    }
`;

const NamePortfolio = styled(texto)`
    letter-spacing: 1px;
    font-size: 3.2rem;

    @media (max-width: 768px){
      font-size: 2.2rem;
      padding: 0;
      padding-top: 10px;      
      justify-content: center;    
    }
`;

const Developer = styled(texto)`
   display: flex;
   align-items: center;  
   flex-direction: column;

  @media (max-width: 768px){
    justify-content: center;    
  }
`;


const changeColorAnimation = keyframes`
  0% {
    color: #FF2D00; /* Rojo claro */
  }
  8.33% {
    color: #FF4D00; /* Naranja claro */
  }
  16.66% {
    color: #FF8C00; /* Anaranjado */
  }
  25% {
    color: #FFC300; /* Amarillo */
  }
  33.33% {
    color: #00FFC2; /* Cyan */
  }
  41.66% {
    color: #00FFEF; /* Cyan claro */
  }
  50% {
    color: #00B8FF; /* Azul claro */
  }
  58.33% {
    color: #0077FF; /* Azul */
  }
  66.66% {
    color: #2400FF; /* Azul oscuro */
  }
  75% {
    color: #B600FF; /* Morado */
  }
  83.33% {
    color: #FF00DD; /* Rosa */
  }
  91.66% {
    color: #FF0088; /* Rosa claro */
  }
  100% {
    color: #FF2D00; /* Vuelve al primer color */
  }
`;

// Estilo del componente
const ChangingSpan = styled.span`
    /* Animación */
    animation: ${changeColorAnimation} 10s linear infinite; /* Cambia cada 2 segundos */
    font-size: 2.8rem;
    letter-spacing: 1px;
    margin-left: 4%;
    font-weight: bold;

    @media (max-width: 768px){
      margin-left: 0;
    }
`;

const ContainerTechs = styled.div`	
    width: 100%;
    height: 100%;
    padding-left: 52px;
    display: flex;
    align-items: end;

    @media (max-width: 768px){
      width: 52%;
      grid-column: 1 / 3;
      justify-self: center;
      padding-left: 0px;      
      align-self: center;
    }
`;

const ContainerNetworks = styled.div`	
    width: 100%;
    height: 100%;
    padding-right: 52px;
    display: flex;
    justify-content: right;

    @media (max-width: 768px){
      width: 52%;
      grid-column: 1 / 3;
      justify-self: center;
      padding-right: 0px;
      align-self: center;
    }
`;

function Header(){
    return(
        <>
            <StyledHeader>   
                <ContainerNetworks>
                    <Networks></Networks>   
                </ContainerNetworks>  
                <Logo></Logo>             
            
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>
                
                <Div2>
                    <NamePortfolio>Hola, Soy EDUARDO RIREYES</NamePortfolio>
                    <Developer>Desarrollador Frontend <ChangingSpan>&lt;/&gt;</ChangingSpan></Developer>
                    <Developer>Futuro Desarrollador Fullstack</Developer>                    
                    <ContainerTechs>
                        <Tecnologies></Tecnologies>
                    </ContainerTechs>
                </Div2>    
                
                      
                       
                                 
            </StyledHeader>
        </>
    );
}

export { Header };