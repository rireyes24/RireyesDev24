import React from 'react';
import { ItemsContainer } from '../ItemsContainer';

const Networks = () => {

  const links = [
    { name: 'github', url: 'https://github.com/EduardoRireyes24', pathImage: '/public/icons/github.svg' },
    { name: 'X', url: 'https://twitter.com/e_rireyes24', pathImage: '/public/icons/X.svg' },
    { name: 'instagram', url: 'https://www.instagram.com/e_rireyes24/', pathImage: '/public/icons/instagram.svg' },    
    { name: 'linkedin', url: 'https://www.linkedin.com', pathImage: '/public/icons/linkedin.svg' },    
  ];

  return (
    <ItemsContainer 
      arrayItems={links}
      columns={[8, 11]}
      rows={[1, 2]}
    />
  );
};

export {Networks};