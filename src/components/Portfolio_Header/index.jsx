import React from 'react';
import styled from 'styled-components';
import './style.css'
import { Networks } from '../Networks';

const StyledHeader = styled.header`
    width: 100%;
    height: 300px; 
    display: grid; 
    grid-template-columns: repeat(6, 16.66%);
    grid-template-rows: repeat(5, 20%);
`;

const LayerNum0 = styled.span`
    width: 100%;
    height: 100%;
    grid-column: 1 / 6;
    grid-row: 1 / 6;
`;

const LayerNum0Black = styled.span`
    width: 100%;
    height: 100%;
    grid-column: 1 / 7;
    grid-row: 1 / 6;
    background-color: #00000073;
    
`;

const LayerNum1 = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 5 / 7;
    grid-row: 1 / 6;
    background: rgb(196, 196, 245);
   
    
`;

const NamePortfolio = styled.h1`
    color: white;
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    align-self: center;
    justify-self: center;
`;

const PhotoPortfolio = styled.span`
    width: 128px;
    height: 128px;
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    background-color: black;
    border-radius: 50%;
    border: 4px solid #00ACC7;
    align-self: center;
    justify-self: center;
`;

function Header(){
    return(
        <>
            <StyledHeader>
                <LayerNum0 className="banner"></LayerNum0>
                <LayerNum0Black></LayerNum0Black>
                <LayerNum1></LayerNum1>
                <Networks></Networks>
                
                <NamePortfolio>Eduardo Rireyes</NamePortfolio>
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>
                <p>header</p>
            </StyledHeader>
        </>
    );
}

export { Header };