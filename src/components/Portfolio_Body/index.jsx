import React from 'react';
import styled from 'styled-components';
import './styleMain.css';
import { dataProjects } from '../../utils/dataProjects';
import { SkillCard } from '../Skills';
import { SectionRight } from '../Section_Right';

const Paraghap = styled.p`
    font-size: 1.8rem;
    letter-spacing: 1px;    
`;


function Body(){
    return(         
        <>   
          <main>
                <SectionRight nameSection={'SOBRE MÍ'} sectionSide={'left'}/>  
                    <div className='about-me'>
                        <Paraghap>Hola Amigo o Amiga!</Paraghap>
                        <Paraghap>
                            Soy Eduardo Rireyes, tengo 23 años, vivo en Guatemala y estudio Desarrollo Web.
                        </Paraghap>
                        <Paraghap>
                            Estoy enfocado con ser FullStack Developer especializado en Frontend.
                        </Paraghap>
                        <Paraghap>
                            Poseo habilidades en tecnologías como React.js, los estandaraes HTML, CSS y JavaScript, 
                            tecnologias de tipado como TypeScript, habilidaes con API REST entre otras.
                        </Paraghap>
                        <Paraghap>
                            Para mi es muy importante estar actualizado con las últimas tecnologías y 
                            tendencias de esta hermosa industria, desde nuevos frameworks hasta la inteligencia 
                            artificial, para estar siempre a la vanguardia en el campo.
                        </Paraghap>                        
                    </div>

                
                <SectionRight nameSection={'PROYECTOS'} sectionSide={'right'}/>                
                <div className="projects-container">
                    {
                        dataProjects.map(project => (
                            <a 
                                className="section-project" 
                                href={project.address} 
                                target="blank"
                            >
                                <span 
                                    className='logo-project'
                                    style={{backgroundImage: `url(${project.logo})`}} 
                                ></span>
                                <h4 className="name-project">{project.name}</h4>
                                <p className="description-project">{project.description}</p>
                                                         
                                <span 
                                    className="project-image" 
                                    style={{backgroundImage: `url(${project.image})`}
                                }></span>   
                            </a>
                        ))
                    }
                </div>

                <SectionRight nameSection={'CERTIFICACIONES'} sectionSide={'left'}/>
                <SectionRight nameSection={'HABILIDADES'} sectionSide={'left'}/>       
                <SkillCard></SkillCard>

                <SectionRight nameSection={'CONTACTO'} sectionSide={'right'}/>  
                <div></div>
          </main>

        </>
    );
}

export { Body }



/* Hello!  My name is <strong>Eduardo Rireyes</strong> and I am a passionate web developer 
from <strong>Guatemala</strong>, aged <strong>22</strong>. I love creating 
innovative and functional digital solutions through web development. With strong 
technical skills in technologies like <strong>HTML</strong>, <strong>CSS</strong>, 
and <strong>JavaScript</strong>, as well as experience with popular frameworks like 
<strong> React</strong>, I can design and develop attractive and efficient websites with 
an excellent user experience. */

/* I am studying <strong>Web Development</strong>, with a focus on becoming a specialized 
<strong> FullStack Developer</strong> with expertise in <strong>frontend</strong> development. 
I stay updated with the latest trends and technologies in the industry, 
ranging from <strong>new frameworks</strong> to <strong>Artificial Intelligence</strong>, to always stay at 
the forefront of the field. */