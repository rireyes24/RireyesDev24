import React from 'react';
import styled from 'styled-components';
import './style.css'

const NetworksContainer = styled.div`
  grid-column: 9 / 11;
  grid-row: 1 / 6;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  width: 80px;
  height: 90%;  
  align-self: center;
  justify-self: end;
  margin-right: 20px;

  @media (max-width: 768px){
    width: 90%;
    height: 60%;
    grid-column: 1 / 2;
    grid-row: 5 / 6;   
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    justify-self: center;
    align-self: flex-end;        
    margin-right: 0px;     
  }
`;

const NetworkBox = styled.div`
  display: grid;
  place-content: center;
`;

const NetworkSpan = styled.span`
    
  display: flex; /* Añade flex para centrar el contenido en los spans */
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 0.3s ease; /* Agrega una transición para la opacidad */
  
  &:hover {
    transform: scale(1.10); /* Efecto de crecer al pasar el mouse por encima */    

  }
`;

const NetworkAnchor  = styled.a`
  width: 48px;
  height: 48px;
  display: grid;
  place-content: center;
`;

const Networks = () => {
  const links = [
    { name: 'github', url: 'https://github.com/EduardoRireyes24' },
    { name: 'instagram', url: 'https://www.instagram.com/e_rireyes24/' },
    { name: 'twitter', url: 'https://twitter.com/e_rireyes24' },
    { name: 'linkedin', url: 'https://www.linkedin.com' },
  ];

  return (
    <NetworksContainer>
       {links.map(link => (
        <NetworkBox key={link.name}>
          <NetworkAnchor href={link.url} target="_blank" rel="noopener noreferrer">
            <NetworkSpan className={link.name}>             
            </NetworkSpan>
          </NetworkAnchor>
        </NetworkBox>
      ))}
    </NetworksContainer>
  );
};

export {Networks};