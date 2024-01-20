import { useState } from "react";
import styled from "styled-components";
import { dataSkills } from "../../utils/dataSkills";
import { pathReact } from "../../utils/urlsCertifications";

const Container = styled.div`
    width: 100%;
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

const P = styled.p`
    font-size: 18px;
    margin-bottom: 44px;
`

const Certifications = () => {
     
    const [dataSkill] = useState([...pathReact]);


    return(
        <>     
            <P>Estos son los certificados más importantes que comprueban mi conocimiento.</P>
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