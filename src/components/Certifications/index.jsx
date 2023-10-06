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
    width: 82%;
    display: flex;   
    flex-wrap: wrap;
    justify-content: center;    
    justify-self: center;
`;

const ButtonSkill = styled.button`
    
    height: 42px;
    display: flex;   
    justify-content: space-around;    
    align-items: center;
    border-radius: 50px;
    border: none;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #F2F2F2;
    padding: 0 28px;
    color: #272b33;

    box-shadow: 0px 6px 10px -1px rgba(242, 242, 242, 0.377);
    -webkit-box-shadow: 0px 6px 10px -1px rgba(242,242,242,0.377);
    -moz-box-shadow: 0px 6px 10px -1px rgba(242,242,242,0.377);
`;

const TechSpan = styled.span`
    display: block;
    width: 20px;
    height: 20px;
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
                    <span>React.js</span>
                </ButtonSkill>    

                <ButtonSkill onClick={() => handleClick(pathHTMLCSS)}>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.HTML})`}}></TechSpan>
                        <span>HTML</span>                     
                    </DivContainer>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.CSS})`}}></TechSpan>
                        <span>CSS</span>
                    </DivContainer>
                </ButtonSkill>   

                <ButtonSkill onClick={() => handleClick(pathJavaScript)}>                    
                    <TechSpan style={{backgroundImage: `url(${dataSkills.JavaScript})`}}></TechSpan>
                    <span>JavaScript</span>
                </ButtonSkill>     

                <ButtonSkill onClick={() => handleClick(pathTypeScript)}>
                    <TechSpan style={{backgroundImage: `url(${dataSkills.TypeScript})`}}></TechSpan>
                    <span>TypeScript</span>
                </ButtonSkill>        

                <ButtonSkill onClick={() => handleClick(certificationPathGitGitHubBash)}>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.Git})`}}></TechSpan>
                        <span>Git</span> 
                    </DivContainer>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.GitHub})`}}></TechSpan>
                        <span>GitHub</span>
                    </DivContainer>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.Bash})`}}></TechSpan>
                        <span>Bash</span>
                    </DivContainer>
                </ButtonSkill> 

                <ButtonSkill onClick={() => handleClick(pathViteNPM)}>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.Vite})`}}></TechSpan>
                        <span>Vite.js</span>
                    </DivContainer>
                    <DivContainer>
                        <TechSpan style={{backgroundImage: `url(${dataSkills.NPM})`}}></TechSpan>
                        <span>NPM</span>
                    </DivContainer>
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