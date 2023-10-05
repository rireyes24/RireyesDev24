import React from 'react';
import github from '/icons/github.svg';
import X from '/icons/X.svg';
import instagram from '/icons/instagram.svg';
import linkedin from '/icons/linkedin.svg';
import { ItemsContainer } from './ItemsContainer';

const Networks = () => {

  const links = [
    { name: 'github', url: 'https://github.com/EduardoRireyes24', pathImage: github },
    { name: 'X', url: 'https://twitter.com/e_rireyes24', pathImage: X },
    { name: 'instagram', url: 'https://www.instagram.com/rireyes_24', pathImage: instagram },    
    { name: 'linkedin', url: 'https://www.linkedin.com', pathImage: linkedin },    
  ];

  return (
    <ItemsContainer 
      arrayItems={links}
      columns={[3, 4]}
      rows={[1, 2]}
      justifySelf={'right'}
      alignSelf={'start'}
    />
  );
};

export {Networks};