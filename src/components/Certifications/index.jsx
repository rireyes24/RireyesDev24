import { useState } from "react";
import styled from "styled-components";
import { pathReact } from "../../utils/urlsCertifications";
import { dataCertification } from "../../utils/dataCertification";

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
    background-color: #920011;
    padding: 0 28px;
`;


const Certifications = () => {

    const [skill, setSkill] = useState('React.js');    
    const [dataSkill, setDataSkill] = useState([...pathReact]);

    function handleClick(name, data){
        console.log(name);
        setSkill(name);        
        setDataSkill(data);
    }

    return(
        <>
            <ContainerButtons>
                {dataCertification.map(skill => {

                    const newText = `${skill.name}`

                    return(
                        <ButtonSkill key={skill.name} onClick={() => handleClick(skill.name, skill.data)}><span style={{
                            display: 'block',
                            width: '20px',
                            height: '20px',
                            background: `url(${skill.icon})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            marginRight: '10px'

                        }}></span>{`${skill.name}`}</ButtonSkill>
                    )
                })}
                
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