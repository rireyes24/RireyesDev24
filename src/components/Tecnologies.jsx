import React from 'react';
import { ItemsContainer } from './ItemsContainer';

const Tecnologies = () => {

  const links = [
    { tech: 'react', pathImage: 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1682986537/NewPortfolio2024/skills/react_y2uvov.svg' },
    { tech: 'javascript', pathImage: 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1682986593/NewPortfolio2024/skills/javascript_cdvkmi.svg'},
    { tech: 'typescript', pathImage: 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1682987823/NewPortfolio2024/skills/typescript_jdn1ed.svg'},    
    { tech: 'vite', pathImage: 'https://res.cloudinary.com/dejj8n6g7/image/upload/v1682987799/NewPortfolio2024/skills/vitejs_d8tnxb.svg'},    
  ];
  
  return (
    <ItemsContainer 
      arrayItems={links}
      columns={[1, 3]}
      rows={[6, 7]}      
      containerMargin={[0, 0, 32, 32]}
    />
  );
};

export {Tecnologies};

