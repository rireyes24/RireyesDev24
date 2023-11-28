import React from 'react';
import logoRireyes from '/Rireyes_Light.svg';
import styled from 'styled-components';
import './style.css';
import ButtonMenu from '../ButtonMenu';
import { Sections } from '../Sections';
import { Menu } from '../Menu';

const Container = styled.div`
  top: 0px;
  right: 0px;
  position: sticky;
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: 36% 64%;
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

  @media (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Logo = styled.span`
    width: 152px;
    height: 42px;    
    background-image: url(${logoRireyes});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;  
    justify-self: center;  

    @media (max-width: 768px){
      grid-column: 2 / 3;
    }
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
  grid-row: 1 / 2;

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

const NavigatorPortfolio = ({setHiddenMenu, hiddenMenu}) => {
  return (    
    <Container mobile>      
      <LeftPanel>
        <ButtonMenu setHiddenMenu={setHiddenMenu} hiddenMenu={hiddenMenu}></ButtonMenu>
        <Logo></Logo>       
      </LeftPanel>
      <RightPanel>      
        <Sections></Sections>        
      </RightPanel>      
      {!hiddenMenu ? <Menu setHiddenMenu={setHiddenMenu} hiddenMenu={hiddenMenu}></Menu> : <></>}
  </Container>
  
  );
};


export { NavigatorPortfolio, LeftPanel, Logo, LogoText };




