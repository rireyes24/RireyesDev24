import React from 'react';
import github from '/public/icons/github.svg';
import X from '/public/icons/X.svg';
import instagram from '/public/icons/instagram.svg';
import linkedin from '/public/icons/linkedin.svg';
import { ItemsContainer } from './ItemsContainer';

const Networks = () => {

  const links = [
    { name: 'github', url: 'https://github.com/EduardoRireyes24', pathImage: github },
    { name: 'X', url: 'https://twitter.com/e_rireyes24', pathImage: X },
    { name: 'instagram', url: 'https://www.instagram.com/e_rireyes24/', pathImage: instagram },    
    { name: 'linkedin', url: 'https://www.linkedin.com', pathImage: linkedin },    
  ];

  return (
    <ItemsContainer 
      arrayItems={links}
      columns={[9, 11]}
      rows={[1, 2]}
      containerMargin={[32, 32, 0, 0]}
    />
  );
};

export {Networks};