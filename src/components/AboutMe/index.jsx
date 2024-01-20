import styled from "styled-components";
import aboutMe from '../../../public/icons/about-me.png'
import { SectionRight } from '../Section_Right';

const Container = styled.section`
    min-height: 480px;
    display: grid;
    grid-template-columns: 40% 60%;
`;


const AboutMeContainer = styled.div`
    width: 96%;
    height: 420px;
    max-height: 460px;
    color: var(--Primary-Black);
    font-size: 1.4rem;
    display: flex;  
    flex-direction: column;
    justify-content: center;

    align-self: center;
    justify-self: end;

  p {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 1.6rem;
  }
`;

const PhotoPortfolio = styled.div`        
    position: relative;
    width: 280px;
    height: 420px;
    border-radius: 12px;
    background-image: url('https://res.cloudinary.com/dejj8n6g7/image/upload/v1702074146/NewPortfolio2024/20231208_161907_d1r3hn.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: left;
    align-self: start;
    z-index: 2;

  
    @media (max-width: 768px){
        width: 182px;
        height: 182px;
        grid-column: 1 / 3;
        grid-row: 4 / 5;   
        border-radius: 40px 0px 0px 0px;    
        margin-top: 42px; 
    }
`;

const PhotoBackground = styled.div`        
    width: 280px;
    height: 420px;
    align-self: start;
    border-radius: 12px;
    border: 8px solid #000FDA;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: left;
    align-self: start;
    transform: translateY(28px) translateX(28px);
    z-index: 1;

  
    @media (max-width: 768px){
        width: 182px;
        height: 182px;
        grid-column: 1 / 3;
        grid-row: 4 / 5;   
        border-radius: 40px 0px 0px 0px;    
        margin-top: 42px; 
    }
`;

const Paraghap = styled.p`
    font-size: 1.8rem;
    letter-spacing: 1px;  
    color: white;  
    text-align: left;
`;

const AboutMe = () => {
    return (
        <>
            <SectionRight sectionID={'about-me'} nameSection={'SOBRE MÍ'} srcImage={aboutMe}/>  
            <Container>
                <AboutMeContainer>
                    <Paraghap>
                        Me llamo Eduardo Rireyes, tengo 23 años, vivo en Guatemala y soy <span style={{color: '#EDEE9B'}}>Desarrollador Frontend</span> enfocado en ser desarrollador full stack con especialización Frontend.
                    </Paraghap>
                    <Paraghap>
                        Poseo habilidades en frameworks como React.js y Next.js, los estándares HTML, CSS & JavaScript, 
                        TypeScript, uso de API REST, entre otras tecnologías.
                    </Paraghap>
                    <Paraghap>
                        Para mí es muy importante estar actualizado con las últimas tecnologías y tendencias 
                        del desarrollo de software, desde nuevos frameworks hasta inteligencia artificial, 
                        para estar siempre a la vanguardia en el campo.
                    </Paraghap>                        
                </AboutMeContainer>

                <PhotoPortfolio className="my-photo"></PhotoPortfolio>
                <PhotoBackground></PhotoBackground>
            </Container>
        </>
    )
}

export { AboutMe }