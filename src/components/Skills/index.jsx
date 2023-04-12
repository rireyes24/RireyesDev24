import React from 'react';
import styled from 'styled-components';
import { dataSkills } from '../../utils/dataSkills.js'

const StyledSection = styled.section`
    width: 90%;
    display: flex;
    //flex-direction: column;
    flex-wrap: wrap;
    //grid-template-columns: repeat(auto-fill, 100px);  
    justify-self: center;
    justify-content: center;
    gap: 20px;
`;

const StyledCard = styled.div`
    width: 120px;
    height: 172px;
    background-color: gold;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 70% 30%;
    border-radius: 16px;
    justify-self: center;
`;

const DivIcon = styled.div`
    place-self: center;
    width: 100px;
    height: 100px;
    background-color:  white;
    display: grid;    
    border-radius: 8px;
`;

const SpanIcon = styled.span`
    place-self: center;
    width: 80%;
    height: 80%;
    background-color:  white;
    display: grid;    
    border-radius: 8px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const NameIcon = styled.h3`
    width: 90%;
    height: 90%;
    display: grid;
    place-items: center;
    place-self: center;
    font-size: 1.4rem;    
    color: var(--Secondary-Black);
`;


function SkillCard(){
    return(
        <>
            <StyledSection>
                {
                    dataSkills.map(skill => (
                        <StyledCard>
                            <DivIcon>
                                <SpanIcon style={{backgroundImage: `url(${skill.icon})`}}></SpanIcon>
                            </DivIcon>
                            <NameIcon>{skill.name}</NameIcon>
                        </StyledCard>
                    ))
                }
            </StyledSection>
        </>
    );
}

export { SkillCard };