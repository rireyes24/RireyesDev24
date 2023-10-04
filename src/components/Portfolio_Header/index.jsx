import React from 'react';
import styled, { css } from 'styled-components';
import { Networks } from '../Networks';
import { Tecnologies } from '../Tecnologies';

const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    height: 488px;
    display: grid; 
    grid-template-columns:  25% 50% 25%;
    grid-template-rows: 20% 60% 20%;
    overflow: hidden;

`;

const LayerNum0 = styled.span`
    width: 100%;
    height: 100%;
    grid-column: 1 / 11;
    grid-row: 1 / 7;
    background-color: #272B33;
    overflow: hidden;
`;

const PhotoPortfolio = styled.div`
    position: relative;
    width: 168px;
    height: 168px;
    border-radius: 50%;
    align-self: center;
    justify-self: flex-start;
 
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

    @media (max-width: 375px){
        width: 120px;
        height: 120px;
    }
`;

const NamePortfolio = styled.h1`
    width: 400px;
    letter-spacing: 1px;
    font-size: 2.2rem;
    color: white;
    align-self: center;
    
`;

const Developer = styled.p`
    width: 400px;
    height: 32px;
    font-size: 1.4rem;
    color: white;
    align-self: flex-end;
    justify-self: center;

`;

const Div = styled.div`
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Div2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;


function Header(){
    return(
        <>
            <StyledHeader>                        
                <LayerNum0></LayerNum0>                
                <Networks></Networks>                
                <Div>
                    <PhotoPortfolio className="my-photo"></PhotoPortfolio>
                    <NamePortfolio>EDUARDO RIREYES</NamePortfolio>
                    <Div2>
                        <Developer>Frontend Developer</Developer>
                        <Developer>Future Fullstack Dev</Developer>
                    </Div2>                
                </Div>  
                <Tecnologies></Tecnologies>              
            </StyledHeader>
        </>
    );
}

export { Header };