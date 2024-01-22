import React from 'react';
import styled from 'styled-components';
import { Tecnologies } from '../Tecnologies';
import Rireyes_Light from '/Rireyes_Light.svg';
import { keyframes } from 'styled-components';
import { ContactMeButton } from '../ContactMeButton';

const StyledHeader = styled.header`
    width: 68%;
    height: 298px;
    display: grid; 
    grid-template-columns: 60% 40%;
    grid-template-rows: 40% 60%;
    padding-top: 42px;

    @media (max-width: 768px){
      width: 94%;
      height: auto;
      min-height: 380px;      
      grid-template-rows: 40% 40% 20%;
      grid-template-columns: 100%;
      margin-bottom: 20px;
    }

`;

const Logo = styled.span`
    position: relative;
    top: 5px;
    left: -5px;
    width: 238px;
    height: 78px;    
    background-image: url(${Rireyes_Light});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;  
    justify-self: start;
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @media (max-width: 768px){      
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



const Div2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    justify-content: flex-end;

    @media (max-width: 768px){
      grid-row: 2 / 3;
      padding: 0px;
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
     /* Animación */
     animation: ${moveRightAnimation} 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

    opacity: 0; /* Inicialmente invisible */


    @media (max-width: 768px){      
      padding: 0;
      margin-bottom: 20px;
    }
`;

const NamePortfolio = styled(texto)`
  display: flex;
    letter-spacing: 1px;
    font-size: 3.2rem;
    white-space: nowrap;

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
   

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center; 
    align-items: center;     
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
      font-size: 2.4rem;
      margin-left: 0;
      margin-top: 8px;
    }
`;

const ContainerTechs = styled.div`	
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;   
    align-items: end;
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @media (max-width: 768px){
      width: 52%;
      grid-column: 1 / 3;
      justify-self: center;
      padding-left: 0px;      
      align-self: center;
    }
`;

function Header(){
    return(
        <>
            <StyledHeader>   
              
                <Logo></Logo>             
                <ContactMeButton></ContactMeButton>               
                {/* <ChangingSpan>&lt;/&gt;</ChangingSpan> */}
                <Div2>
                    <NamePortfolio>Hola, Soy  <span style={{color: '#EDEE9B', margin: '0 10px'}}> Eduardo Rireyes</span></NamePortfolio>
                    <Developer>Desarrollador Frontend <ChangingSpan>&lt;/&gt;</ChangingSpan></Developer>
                    {/* <Developer>Futuro Desarrollador Fullstack</Developer>     */}
                </Div2>  
                                 
            </StyledHeader>
        </>
    );
}

export { Header };