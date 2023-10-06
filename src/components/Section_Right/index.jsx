import styled from 'styled-components';
import './style.css';

const SectionContainer = styled.div`
    justify-self: center;
    width: 90%;
    border-radius: 40px;
    height: 68px;
    background-color: #111316;
    display: grid;    
    grid-template-columns: 1fr 3fr 1fr; 
    grid-template-rows: 100%;
    margin-top: 140px;
    margin-bottom: 20px;
    border: 2px solid #111316;
    z-index: 1;
    position: relative;

    @media (max-width: 768px){
        height: 48px;
    }
`;

const IconsContain = styled.span`
    width: 112px;
    height: 112px;
    background-color: #272b33;
    background-size: contain;  
    z-index: 2;
    align-self: center;
    border-radius: 50%;
    display: grid;
    place-content: center;

    @media (max-width: 768px){
        width: 90px;
        height: 90px;
    }
`;

const Icon = styled.span`
    width: 42px;
    height: 42px;
    display: block;
    background-size: contain;

    @media (max-width: 768px){
        width: 34px;
        height: 34px;
    }
`;

const H2 = styled.h2`
    place-self: center;
    width: 80%;
    text-align: center;
    font-size: 2.8rem;
    font-weight:900;    
    letter-spacing: 5px;
    color: white;
    grid-column: 2 / 3;

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
                <IconsContain className={`design design-${sectionSide}`}>
                    <Icon style={{
                        backgroundImage: `url(${srcImage})`, 
                    }}></Icon>
                </IconsContain>

                <H2 id={sectionID} className={`h2-${sectionSide}`}>{nameSection}</H2>      

                <IconsContain 
                    className={`design design-${sectionSide}`} 
                    srcImage={srcImage}                    
                >
                    <Icon style={{
                        backgroundImage: `url(${srcImage})`, 
                    }}></Icon>
                </IconsContain>
            </SectionContainer>
        </>
    );
}

export { SectionRight }