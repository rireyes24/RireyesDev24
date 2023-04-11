import React from 'react';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  height: 72px;
  display: grid;
  grid-template-columns: 40% 60%;
  background-color: #1d2026;
  color: #f2f2f2;
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
  font-size: 2.4rem;    
  letter-spacing: 1px;
  margin-left: 20px;
  text-transform: uppercase; /* Aplica mayúsculas al texto */
  color: #f2f2f2; /* Establece el color de texto */
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
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
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.3s ease; /* Agrega una transición suave para el cambio de color */
  
  &:hover {
    color: #ffffff; /* Cambia el color del texto al pasar el ratón por encima */
  }  
`;

const NavigatorPortfolio = () => {
  return (
    <Container>
      <LeftPanel>
        <Logo className='clariLogo'></Logo>
        <LogoText>CLARILDANA</LogoText>        
      </LeftPanel>
      <RightPanel>      
        <NavList>
          <NavItem href="#about">About Me</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavList>
      </RightPanel>
    </Container>
  );
};


export { NavigatorPortfolio };




