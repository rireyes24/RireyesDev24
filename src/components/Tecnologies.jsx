import React from 'react';
import { dataSkills } from '../utils/dataSkills';
import styled from 'styled-components';

const Container = styled.div`
  width: 230px;
  height: 60px;
  display: flex;  
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px){    
    align-self: center;
  }
`;


const ItemBox = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-content: center;     
  transition: transform 0.3s ease;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin-bottom: 20px;


  &:hover {
      transform: scale(1.10); /* Efecto de crecer al pasar el mouse por encima */  
      transition: transform 0.3s ease;  
  }

  @media (max-width: 768px){
      width: 44px;
      height: 44px;        
  }
`;

const Anchor  = styled.a`
  width: 28px;
  height: 28px;
  display: grid;
  place-content: center;
  background-repeat: no-repeat;
  background-size: contain;

    @media (max-width: 768px){
      width: 24px;
      height: 24px;        
    }
`;

const Tecnologies = () => {

  const links = [
    { tech: 'react', pathImage: dataSkills.React },
    { tech: 'javascript', pathImage: dataSkills.JavaScript },
    { tech: 'nextJS', pathImage: dataSkills.NextJS },
    { tech: 'typescript', pathImage: dataSkills.TypeScript },    
  ];
  
  return (
    <Container>
      {links.map((link, index) => (
                <ItemBox key={index}>
                    <Anchor                         
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={
                            {
                                backgroundImage: `url(${link.pathImage})`
                            }}
                    ></Anchor>
                </ItemBox>
      ))}
    </Container>
  );
};

export {Tecnologies};

