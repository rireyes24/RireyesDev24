import React from 'react'
import styled from 'styled-components'
import { Sections } from './Sections';


const Container = styled.div`
  top: 70px;
  left: 0px;
  position: absolute;
  width: 60%;  
  max-width: 236px;
  height: auto;
  display: grid;
  grid-template-columns: 36% 64%;
  background-color: var(--Primary-Black);
  color: var(--Primary-White);
  padding: 10px 20px;
  z-index: 3;
  border-radius: 0  0 20px 0;

  @media (max-width: 768px){    
    grid-template-columns: 100%;    
  }
`;

const Menu = () => {
  return (
    <Container>
      <Sections></Sections>
    </Container>
  )
}

export  { Menu }