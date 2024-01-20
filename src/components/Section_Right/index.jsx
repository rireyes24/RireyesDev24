import styled from 'styled-components';
import './style.css';

const SectionContainer = styled.div`
    justify-self: left;
    width: 46%;
    height: 100px;
    display: grid;    
    grid-template-columns: 80% 20%; 
    grid-template-rows: 100%;
    margin-top: 68px;
    margin-bottom: 68px;
    border-bottom: 2px solid #e2e2e2;
    z-index: 1;
    position: relative;
    justify-self: right;

    @media (max-width: 768px){
        height: 48px;        
        margin-top: 100px;
        margin-bottom: 52px;
    }
`;

const Icon = styled.span`
    width: 42px;
    height: 42px;
    display: block;
    background-size: contain;
    place-self: center;

    @media (max-width: 768px){
        width: 34px;
        height: 34px;
    }
`;

const H2 = styled.h2`
    justify-self: right;
    align-self: center;
    width: 94%;
    text-align: end;
    font-size: 2.4rem;
    font-weight:900;    
    letter-spacing: 5px;
    color: white;
    grid-column: 1 / 2;

    @media (max-width: 768px){
        font-size: 1.6rem;         
        letter-spacing: 3px;
        font-weight: 700;   
    }
`;


function Sections({nameSection, sectionSide, srcImage, sectionID}){
 
    var expresionRegular = /\s+/g;
    var listaNombres = nameSection.replace(expresionRegular, "-").toLowerCase();   

    return(
        <>
            <SectionContainer id={listaNombres}>
                <H2 id={sectionID} className={`h2-${sectionSide}`}>{nameSection}</H2>  

                <Icon style={{
                    backgroundImage: `url(${srcImage})`, 
                }}></Icon>                
            </SectionContainer>
        </>
    );
}

export { Sections }