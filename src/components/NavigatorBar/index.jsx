import React from 'react';
import styled, { css } from 'styled-components';
import './style.css';

const Container = styled.div`
  height: 72px;
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: var(--Primary-Black);
  color: var(--Primary-White);

  @media (max-width: 375px){    
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
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
`;

const LogoText = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;    
  letter-spacing: 1px;
  margin-left: 14px;
  text-transform: uppercase; /* Aplica mayúsculas al texto */
  color: var(--Primary-White); /* Establece el color de texto */

  @media (max-width: 375px){
    display: none;
  }
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 375px){
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
  letter-spacing: 1px;
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
        <Logo className='clariLogo'></Logo>
        <LogoText>CLARILDANA</LogoText>        
      </LeftPanel>
      <RightPanel>      
        <NavList>
          <NavItem href="#about-me">About Me</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavList>
      </RightPanel>
    </Container>
  );
};


export { NavigatorPortfolio };




