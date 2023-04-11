import React from 'react';
import styled from 'styled-components';
import './style.css'
import { Networks } from '../Networks';
import { NavigatorPortfolio } from '../NavigatorBar';

const StyledHeader = styled.header`
    width: 100%;
    height: 400px; 
    display: grid; 
    grid-template-columns: repeat(3, 20%) 30% 10%;
    grid-template-rows: repeat(5, 20%);
    overflow: hidden;
`;

const LayerNum0 = styled.span`
    width: 100%;
    height: 100%;
    grid-column: 1 / 6;
    grid-row: 1 / 6;
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
            <NavigatorPortfolio></NavigatorPortfolio>

            <StyledHeader>
        
                <LayerNum0 className="banner"></LayerNum0>                
                <Networks></Networks>
                
                <NamePortfolio>EDUARDO RIREYES</NamePortfolio>
                <p>Frontend Developer</p>
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>                
            </StyledHeader>
        </>
    );
}

export { Header };