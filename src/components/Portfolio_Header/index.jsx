import React from 'react';
import styled, { css } from 'styled-components';
import { Networks } from '../Networks';
import { NavigatorPortfolio } from '../NavigatorBar';
import bannerDesktop from '../../assets/icons/banner.svg'
import bannerMobile from '../../assets/icons/bannerMobile.svg'

const StyledHeader = styled.header`
    width: 100%;
    height: 400px; 
    display: grid; 
    grid-template-columns: repeat(4, 20%) 10% 10%;
    grid-template-rows: repeat(5, 20%);
    overflow: hidden;

    @media (max-width: 768px){
        height: 350px;
        grid-template-columns: 100%; 
        grid-template-rows: 15% 30% 10% 10% 35%;             
    }
`;

const LayerNum0 = styled.span`
    width: 100%;
    height: 100%;
    grid-column: 1 / 8;
    grid-row: 1 / 6;
    background-image: url(${bannerDesktop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;

    @media (max-width: 768px){
        grid-column: 1 / 2;
        grid-row: 1 / 6;
        background-image: url(${bannerMobile})
    }
`;

const NamePortfolio = styled.h1`
    letter-spacing: 1px;
    font-size: 2.2rem;
    color: white;
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    align-self: center;
    justify-self: center;

    @media (max-width: 768px){
        font-size: 1.8rem;
        grid-column: 1 / 2;
        grid-row: 3 / 4;        
    }
`;

const Developer = styled.p`
    font-size: 1.4rem;
    color: white;
    grid-column: 2 / 4;
    grid-row: 4 / 6;
    align-self: center;
    justify-self: center;

    @media (max-width: 768px){
        grid-column: 1 / 2;
        grid-row: 4 / 5;        
    }
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
    background-image: url('https://res.cloudinary.com/dejj8n6g7/image/upload/v1680112768/NewPortfolio2024/MyPhoto_28-03-2023_tnxeoy.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100px;
        height: 100px;
        grid-column: 1 / 2;
        grid-row: 2 / 3;       
        border: 2px solid #d10dd1; 
    }
`;

function Header(){
    return(
        <>
            <NavigatorPortfolio></NavigatorPortfolio>

            <StyledHeader>
        
                <LayerNum0></LayerNum0>                
                <Networks></Networks>
                
                <NamePortfolio>EDUARDO RIREYES</NamePortfolio>
                <Developer>Frontend Developer</Developer>
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>                
            </StyledHeader>
        </>
    );
}

export { Header };