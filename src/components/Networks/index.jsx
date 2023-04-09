import React from 'react';
import styled from 'styled-components';
import './style.css'

const NetworksContainer = styled.div`
    width: 280px;
    height: 180px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 50%);
    justify-content: center;
    align-items: center;
    place-self: center;
    grid-column: 5 / 7;
    grid-row: 2 / 5;
`;

const NetworkBox = styled.div`
  display: grid;
  width: 40px;
  height: 40px;   
  place-self: center;  
  cursor: pointer;
  
  &:hover{
    transform: scale(1.1);
  }
`;

const Networks = () => {
  return (
    <NetworksContainer>
      <NetworkBox>
        <span className="network className1"></span>
      </NetworkBox>
      <NetworkBox>
        <span className="network github"></span>
      </NetworkBox>
      <NetworkBox>
        <span className="network instagram"></span>
      </NetworkBox>
      <NetworkBox>
        <span className="network twitter"></span>
      </NetworkBox>
      <NetworkBox>
        <span className="network linkedin"></span>
      </NetworkBox>
      <NetworkBox>
        <span className="network className6"></span>
      </NetworkBox>
    </NetworksContainer>
  );
};
export {Networks};