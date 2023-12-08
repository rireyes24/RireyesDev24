import { useState } from "react";
import styled from "styled-components";
import { dataSkills } from "../../utils/dataSkills";
import { pathReact, certificationPathGitGitHubBash, pathHTMLCSS, pathJavaScript, pathTypeScript, pathViteNPM } from "../../utils/urlsCertifications";

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: start;
    justify-self: center;
    gap: 20px;  
    row-gap: 24px;  
    //background-color: white;

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FrameImage = styled.img`
    width: 100%;
    height: auto;
    background-color: gray;
    object-fit: cover;
    overflow: hidden;    
    border-radius: 4px;
    justify-self: center;
    align-self: center;
    cursor: pointer;
`;


const ContainerButtons = styled.div`
    width: 80%;
    height: 100px;
    display: flex;    
    align-items: center;
    justify-self: center;
    justify-content: space-around;
    margin: 40px 0px;

    @media (max-width: 768px){
        width: 86%;
        display: flex;
        flex-wrap: wrap;
        min-height: 260px;
        gap: 20px;
        justify-content: center;
        margin: 20px 0px;
    }
`;

const ButtonSkill = styled.button`
    min-width: 68px;
    height: 68px;
    display: flex;     
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: #F2F2F2;
    
    box-shadow: 0 4px 8px 0 black;

    transition: color 0.3s ease, transform 0.3s ease; /* Transición suave */

    &:hover {
        transform: scale(1.1); /* Escala al hacer hover */
        transition: color 0.3s ease, transform 0.3s ease; /* Transición suave */
    }

`;

const TechSpan = styled.span`
    display: block;
    width: 42px;
    height: 42px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-right: 10px;
    margin-left: 10px;
`;

const DivContainer = styled.div`
    display: flex;    
    align-items: center;
`;



const Certifications = () => {
     
    const [dataSkill, setDataSkill] = useState([...pathReact]);

    function handleClick(data){
        setDataSkill(data);
    }

    

    return(
        <>
            <ContainerButtons>

                <ButtonSkill onClick={() => handleClick(pathReact)}>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.React})`}}></TechSpan>                    
                </ButtonSkill>                      

                <ButtonSkill onClick={() => handleClick(pathJavaScript)}>                    
                    <TechSpan style={{backgroundImage: `url(${dataSkills.JavaScript})`}}></TechSpan>                   
                </ButtonSkill>     

                <ButtonSkill onClick={() => handleClick(pathTypeScript)}>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.TypeScript})`}}></TechSpan>                    
                </ButtonSkill> 

                <ButtonSkill onClick={() => handleClick(pathHTMLCSS)}>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.HTML})`}}></TechSpan>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.CSS})`}}></TechSpan>
                </ButtonSkill>      

                <ButtonSkill onClick={() => handleClick(certificationPathGitGitHubBash)}>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.Git})`}}></TechSpan>                        
                    <TechSpan style={{backgroundImage: `url(${dataSkills.GitHub})`}}></TechSpan>                        
                    <TechSpan style={{backgroundImage: `url(${dataSkills.Bash})`}}></TechSpan>                        
                </ButtonSkill> 

                <ButtonSkill onClick={() => handleClick(pathViteNPM)}>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.Vite})`}}></TechSpan>                        
                    <TechSpan style={{backgroundImage: `url(${dataSkills.NPM})`}}></TechSpan>                        
                </ButtonSkill>   

            </ContainerButtons>

            <Container>    
                {dataSkill.map((image, index) => {
                    return(
                        index === 0 ? 
                            <FrameImage key={index} src={image} style={{gridColumn: '1 / 3', gridRow: '1 / 3'}}></FrameImage> : 
                            <FrameImage key={index} src={image}></FrameImage>                        
                    );
                })}
            </Container>
        
        
        </>
     
    );
}

export { Certifications }