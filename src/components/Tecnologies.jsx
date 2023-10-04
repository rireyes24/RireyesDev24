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
      columns={[1, 2]}
      rows={[3, 4]}      
      justifySelf={'left'}
      alignSelf={'end'}
    />
  );
};

export {Tecnologies};

