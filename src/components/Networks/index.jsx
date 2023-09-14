import React from 'react';
import { ItemsContainer } from '../ItemsContainer';

const Networks = () => {

  const links = [
    { name: 'github', url: 'https://github.com/EduardoRireyes24' },
    { name: 'X', url: 'https://twitter.com/e_rireyes24' },
    { name: 'instagram', url: 'https://www.instagram.com/e_rireyes24/' },    
    { name: 'linkedin', url: 'https://www.linkedin.com' },    
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