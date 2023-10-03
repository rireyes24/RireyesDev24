import React from 'react';
import { ItemsContainer } from './ItemsContainer';
import { dataSkills } from '../utils/dataSkills';

const Tecnologies = () => {

  const links = [
    { tech: 'react', pathImage: dataSkills.React },
    { tech: 'javascript', pathImage: dataSkills.JavaScript },
    { tech: 'typescript', pathImage: dataSkills.TypeScript },
    { tech: 'vite', pathImage: dataSkills.Vite },
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

