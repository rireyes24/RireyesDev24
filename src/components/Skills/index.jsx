import React from 'react';
import styled from 'styled-components';
import { dataSkills } from '../../utils/dataSkills';

const StyledSection = styled.section`
    width: 100%;
    display: flex;
    //flex-direction: column;
    flex-wrap: wrap;
    //grid-template-columns: repeat(auto-fill, 100px);  
    justify-self: center;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
    

    @media (max-width: 768px){
        display: grid;        
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-around;
    }
`;

const DivIcon = styled.div`
    place-self: center;
    width: 88px;
    height: 88px;
    background-color:  white;
    display: grid;    
    border-radius: 8px;
    margin-bottom: 20px;

    @media (max-width: 768px){
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }

    box-shadow: 0 4px 8px 0 black;

    transition: color 0.3s ease, transform 0.3s ease; /* Transición suave */

    &:hover {
        transform: scale(1.1); /* Escala al hacer hover */
        transition: color 0.3s ease, transform 0.3s ease; /* Transición suave */
    }
`;

const SpanIcon = styled.span`
    place-self: center;
    width: 64%;
    height: 64%;
    background-color:  white;
    display: grid;    
    border-radius: 6px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 768px){    
        width: 58px;
        height: 58px;
    }
`;

const P = styled.p`
    font-size: 18px;
`

function SkillCard(){

    const arraySkills = Object.values(dataSkills);   
    return(
        <>
            <P>Con este stack de tecnologías, soy capaz de crear proyectos asombrosos.</P>
            <StyledSection>
                {
                    arraySkills.map((skill, index) => (
                        <DivIcon key={index}>
                            <SpanIcon style={{backgroundImage: `url(${skill})`}}></SpanIcon>
                        </DivIcon>  
                    ))
                }
            </StyledSection>
        </>
    );
}

export { SkillCard };