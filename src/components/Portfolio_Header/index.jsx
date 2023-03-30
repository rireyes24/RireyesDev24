import React from 'react';
import styled from 'styled-components';
import './style.css'

const StyledHeader = styled.header`
    width: 100%;
    height: 300px; 
    display: grid; 
    grid-template-columns: repeat(5, 20%);
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
    grid-column: 1 / 6;
    grid-row: 1 / 6;
    background-color: #00000073;
    
`;

const LayerNum1 = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 3 / 6;
    grid-row: 1 / 6;
    background-color: orange;
    background: linear-gradient(45deg, rgba(2,0,36,0) 50%, rgba(255,117,0,1) 50%);    
    
`;

const LayerNum2 = styled.div`
    width: 100%;
    height: 100%;
    grid-column: 1 / 6;
    grid-row: 1 / 7;
    background-color: orange;
    background: linear-gradient(348deg, rgba(215,98,6,0) 52%, #2B28A0 50%);    
`;

const NamePortfolio = styled.h1`
    color: white;
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    align-self: center;
    justify-self: center;
`;

const PhotoPortfolio = styled.span`
    width: 128px;
    height: 128px;
    grid-column: 2 / 3;
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
                <LayerNum2></LayerNum2>
                
                <NamePortfolio>Eduardo Rireyes</NamePortfolio>
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>
                <p>header</p>
            </StyledHeader>
        </>
    );
}

export { Header };