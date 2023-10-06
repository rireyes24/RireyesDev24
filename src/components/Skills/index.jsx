import React from 'react';
import styled from 'styled-components';
import { dataSkills } from '../../utils/dataSkills';

const StyledSection = styled.section`
    width: 90%;
    display: flex;
    //flex-direction: column;
    flex-wrap: wrap;
    //grid-template-columns: repeat(auto-fill, 100px);  
    justify-self: center;
    justify-content: center;
    gap: 20px;
    

    @media (max-width: 768px){
        display: grid;        
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-around;
    }
`;

const DivIcon = styled.div`
    place-self: center;
    width: 110px;
    height: 110px;
    background-color:  white;
    display: grid;    
    border-radius: 8px;
    margin-bottom: 20px;

    @media (max-width: 768px){
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }

    box-shadow: 0px 6px 10px -1px rgba(242, 242, 242, 0.377);
    -webkit-box-shadow: 0px 6px 10px -1px rgba(242,242,242,0.377);
    -moz-box-shadow: 0px 6px 10px -1px rgba(242,242,242,0.377);
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

function SkillCard(){

    const arraySkills = Object.values(dataSkills);   
    return(
        <>
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