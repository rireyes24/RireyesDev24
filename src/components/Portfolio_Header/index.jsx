import React from 'react';
import styled from 'styled-components';
import './style.css'
import { Networks } from '../Networks';
import { NavigatorPortfolio } from '../NavigatorBar';

const StyledHeader = styled.header`
    width: 100%;
    height: 400px; 
    display: grid; 
    grid-template-columns: repeat(4, 20%) 10% 10%;
    grid-template-rows: repeat(5, 20%);
    overflow: hidden;
`;

const LayerNum0 = styled.span`
    width: 100%;
    height: 100%;
    grid-column: 1 / 8;
    grid-row: 1 / 6;
`;

const NamePortfolio = styled.h1`
    letter-spacing: 1px;
    font-size: 2.2rem;
    color: white;
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    align-self: center;
    justify-self: center;
`;

const Developer = styled.p`
    font-size: 1.4rem;
    color: white;
    grid-column: 2 / 4;
    grid-row: 4 / 6;
    align-self: center;
    justify-self: center;
`;

const PhotoPortfolio = styled.span`
    width: 160px;
    height: 160px;
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    background-color: black;
    border-radius: 50%;
    border: 4px solid #d10dd1;
    align-self: center;
    justify-self: center;
`;

function Header(){
    return(
        <>
            <NavigatorPortfolio></NavigatorPortfolio>

            <StyledHeader>
        
                <LayerNum0 className="banner"></LayerNum0>                
                <Networks></Networks>
                
                <NamePortfolio>EDUARDO RIREYES</NamePortfolio>
                <Developer>Frontend Developer</Developer>
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>                
            </StyledHeader>
        </>
    );
}

export { Header };