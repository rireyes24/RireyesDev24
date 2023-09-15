import React from 'react';
import styled, { css } from 'styled-components';
import { Networks } from '../Networks';
import { NavigatorPortfolio } from '../NavigatorBar';
import bannerMobile from '../../assets/icons/bannerMobile.svg'
import { Tecnologies } from '../Tecnologies';

const StyledHeader = styled.header`
    width: 100%;
    height: 488px;
    display: grid; 
    grid-template-columns: repeat(8, 10%) 10% 10%;
    grid-template-rows: repeat(6, 16.7%);
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
    grid-column: 1 / 11;
    grid-row: 1 / 7;
    background-color: #272B33;
    overflow: hidden;

    @media (max-width: 768px){
        grid-column: 1 / 2;
        grid-row: 1 / 6;
        background-image: url(${bannerMobile})
    }
`;

const PhotoPortfolio = styled.div`
    position: relative;
    width: 168px;
    height: 168px;
    grid-column: 5 / 7;
    grid-row: 2 / 5;
    border-radius: 50%;
    align-self: flex-start;
    justify-self: center;
    margin-top: 24px;
 
    display:   grid;
    place-content:   center;

    &:before,
    :after{
        content: '';
        position: absolute;
        border-radius: inherit;
    }

    &::before {
        width:  100%;
        height:  100%;
        background-image: linear-gradient(0deg, #0ba4d3 40%, #d10dd1 100%);
        animation: spin 2s infinite linear;
    }

    &:after  {
        width: 94%;
        height: 94%;
        background-color:  #151515;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-image: url('https://res.cloudinary.com/dejj8n6g7/image/upload/v1688782169/NewPortfolio2024/20230702_105424_hkmuta.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @keyframes spin {
        to{
            transform: rotate(360deg);
        }   
    }

    @media (max-width: 768px){
        width: 100px;
        height: 100px;
        grid-column: 1 / 2;
        grid-row: 2 / 3;       
        border: 2px solid #d10dd1; 
    }
`;

const NamePortfolio = styled.h1`
    width: 400px;
    letter-spacing: 1px;
    font-size: 2.2rem;
    color: white;
    grid-column: 4 / 8;
    grid-row: 4 / 6;
    align-self: center;
    justify-self: center;

    @media (max-width: 768px){
        font-size: 1.8rem;
        grid-column: 1 / 2;
        grid-row: 3 / 4;        
    }
`;

const Developer = styled.p`
    width: 400px;
    height: 32px;
    font-size: 1.4rem;
    color: white;
    grid-column: 5 / 7;
    grid-row: 5 / 6;
    align-self: flex-end;
    justify-self: center;

    @media (max-width: 768px){
        grid-column: 1 / 2;
        grid-row: 4 / 5;        
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
                <Developer>Frontend Developer / Future Fullstack Dev</Developer>
                <PhotoPortfolio className="my-photo"></PhotoPortfolio>  
                <Tecnologies></Tecnologies>              
            </StyledHeader>
        </>
    );
}

export { Header };