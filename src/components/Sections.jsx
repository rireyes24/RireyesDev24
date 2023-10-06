import React from 'react'
import styled from 'styled-components'

const NavList = styled.ul`
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px){    
    flex-direction: row;    
  }
`;

const NavItem = styled.a`
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-right: 1rem;
  text-transform: uppercase; /* Aplica mayúsculas al texto */
  color: var(--Primary-White);
  text-decoration: none;
  transition: color 0.3s ease; /* Agrega una transición suave para el cambio de color */
  
  margin: 18px 0px;
  height: 40px;
  display: grid;
  place-content: center;
  background-color: transparent;
  border: none;

  &:hover {
    transform: scale(1.10);
    color: #ffffff; /* Cambia el color del texto al pasar el ratón por encima */
  }  

  @media (min-width: 768px){   
    max-width: 300px; 
    margin: 0;
  }

`;


const Sections = () => {
  return (
    <NavList>
          <NavItem href="#about-me">Sobre Mí</NavItem>
          <NavItem href="#projects">Proyectos</NavItem>          
          <NavItem href="#certifications">Certificaciones</NavItem>
          <NavItem href="#skills">Habilidades</NavItem>
          <NavItem href="#contact">Contacto</NavItem>
    </NavList>
  )
}

export  {Sections}