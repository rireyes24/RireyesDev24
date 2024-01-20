import React from 'react';
import github from '/icons/github-icon.svg';
import X from '/icons/x-icon.svg';
import instagram from '/icons/instagram-icon.svg';
import linkedin from '/icons/linkedin-icon.svg';
import { ItemsContainer } from './ItemsContainer';

const Networks = () => {

  const links = [
    { name: 'linkedin',   url: 'https://www.linkedin.com/in/rireyes24/', pathImage: linkedin },    
    { name: 'github',     url: 'https://github.com/rireyes24', pathImage: github },
    { name: 'X',          url: 'https://twitter.com/rireyes24', pathImage: X },
    { name: 'instagram',  url: 'https://www.instagram.com/rireyes24', pathImage: instagram },    
  ];

  return (
    <ItemsContainer 
      arrayItems={links}
    />
  );
};

export {Networks};