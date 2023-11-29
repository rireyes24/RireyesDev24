import styled from 'styled-components';
import './style.css';

const SectionContainer = styled.div`
    justify-self: left;
    width: 60%;
    height: 120px;
    display: grid;    
    grid-template-columns: 80% 20%; 
    grid-template-rows: 100%;
    margin-top: 160px;
    margin-bottom: 72px;
    margin-right: 52px;
    border-bottom: 2px solid #e2e2e2;
    z-index: 1;
    position: relative;
    justify-self: right;

    @media (max-width: 768px){
        height: 48px;
    }
`;

const Icon = styled.span`
    width: 64px;
    height: 64px;
    display: block;
    background-size: contain;
    place-self: center;

    @media (max-width: 768px){
        width: 34px;
        height: 34px;
    }
`;

const H2 = styled.h2`
    place-self: center;
    width: 80%;
    text-align: end;
    font-size: 3.8rem;
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


function SectionRight({nameSection, sectionSide, srcImage, sectionID}){
 
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

export { SectionRight }