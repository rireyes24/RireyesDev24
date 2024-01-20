import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Button = styled.button`
    width: 278px;
    height: 52px;
    background-color: #000fda; /* Cambiar color al pasar el mouse */
    border: none;
    border-radius: 8px; /* Bordes redondeados */
    color: var(--Primary-White);
    padding: 10px 20px;
    margin-top: 8px;
    font-size: 18px;
    font-family: 'nunito';
    font-weight: semibold;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
    justify-self: right;
 
    
    &:hover {
        background-color: #0064c2; /* Color celeste */
        
    }

    &:active {
        transform: scale(0.99); /* Reducir tamaño al hacer clic */
    }

    animation: ${fadeIn} 1s ease; /* Animación de fadeIn al cargar */

    /* Ajustes para el brillo más delgado */
    background-size: 300% auto;
    background-image: linear-gradient(to right, transparent 45%, rgba(255, 255, 255, 0.5) 55%);
`;


const ContactMeButton = () => {
    return(
        <>
            <Button>CONTACTAME</Button>
        </>
    )
}



export { ContactMeButton }