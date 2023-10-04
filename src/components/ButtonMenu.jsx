import React from 'react'
import styled from 'styled-components'
import hamMenu from '../../public/icons/hamMenu.png';

const Button = styled.button`
  width: 38px;
  height: 38px;
  display: grid;
  place-content: center;
  background-color: transparent;
  border: none;
  margin-left: 20px;
`;

const Icon = styled.span`
  width: 32px;
  height: 32px;
  display: block;
  background-image: url(${hamMenu});
  background-repeat: no-repeat;
  background-size: contain;  
  background-position: center;
`;

const ButtonMenu = ({setHiddenMenu, hiddenMenu}) => {
  return (
    <Button onClick={() => setHiddenMenu(!hiddenMenu)}><Icon></Icon></Button>
  )
}

export default ButtonMenu