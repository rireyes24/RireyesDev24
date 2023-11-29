import React from 'react';
import { ItemsContainer } from './ItemsContainer';
import { dataSkills } from '../utils/dataSkills';

const Tecnologies = () => {

  const links = [
    { tech: 'nextJS', pathImage: dataSkills.NextJS },
    { tech: 'react', pathImage: dataSkills.React },
    { tech: 'javascript', pathImage: dataSkills.JavaScript },
    { tech: 'typescript', pathImage: dataSkills.TypeScript },    
  ];
  
  return (
    <ItemsContainer 
      arrayItems={links}
      columns={[1, 2]}
      rows={[2, 3]}      
      justifySelf={'left'}
      alignSelf={'end'}
    />
  );
};

export {Tecnologies};

