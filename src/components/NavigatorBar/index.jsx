import React from 'react';
import logoRireyes from '/public/logoRireyes.svg'
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  top: 0px;
  right: 0px;
  position: sticky;
  width: 100%;
  height: 68px;
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: var(--Primary-Black);
  color: var(--Primary-White);
  z-index: 2;

  @media (max-width: 768px){    
    grid-template-columns: 100%;    
  }
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Logo = styled.span`
    width: 42px;
    height: 42px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
`;

const LogoText = styled.h2`
  height: 42px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 2rem;    
  letter-spacing: 2px;
  margin-left: 16px;
  text-transform: uppercase; /* Aplica mayúsculas al texto */
  color: var(--Primary-White); /* Establece el color de texto */

  @media (max-width: 768px){
    display: none;
  }
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px){
    display: none;
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.a`
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-right: 1rem;
  text-transform: uppercase; /* Aplica mayúsculas al texto */
  color: var(--Primary-White);
  text-decoration: none;
  transition: color 0.3s ease; /* Agrega una transición suave para el cambio de color */
  
  &:hover {
    transform: scale(1.10);
    color: #ffffff; /* Cambia el color del texto al pasar el ratón por encima */
  }  
`;

const NavigatorPortfolio = () => {
  return (
    <Container mobile>
      <LeftPanel>
        <Logo 
          style={{
            backgroundImage: `url(${logoRireyes})`
          }}
        ></Logo>
        <LogoText>RIREYES</LogoText>        
      </LeftPanel>
      <RightPanel>      
        <NavList>
          <NavItem href="#about-me">Sobre Mí</NavItem>
          <NavItem href="#projects">Proyectos</NavItem>          
          <NavItem href="#contact">Certificaciones</NavItem>
          <NavItem href="#skills">Habilidades</NavItem>
          <NavItem href="#contact">Contacto</NavItem>
        </NavList>
      </RightPanel>
    </Container>
  );
};


export { NavigatorPortfolio };




