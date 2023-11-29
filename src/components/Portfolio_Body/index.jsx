import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import './styleMain.css';
import { dataProjects } from '../../utils/dataProjects';
import { SkillCard } from '../Skills';
import { SectionRight } from '../Section_Right';
import { Certifications } from '../Certifications';
import aboutMe from '../../../public/icons/about-me.png'
import projects from '../../../public/icons/projects.png'
import certification from '../../../public/icons/certifications.png'
import skills from '../../../public/icons/skills.png'
import contact from '../../../public/icons/contact.png'
import { useEffect, useState } from 'react';

const Paraghap = styled.p`
    font-size: 1.8rem;
    letter-spacing: 1px;  
    color: white;  
    text-align: left;
`;


function Body(){

    const sectionsRef = useRef(null);


    return(         
        <>   
          <main>
                <SectionRight sectionID={'about-me'} nameSection={'SOBRE MÍ'} srcImage={aboutMe}/>  
                
                <div className='about-me'>
                    <Paraghap>Hola Amigo o Amiga!</Paraghap>
                    <Paraghap>
                        Me llamo Eduardo Rireyes, tengo 23 años, vivo en Guatemala y soy desarrollador Frontend.
                    </Paraghap>
                    <Paraghap>
                        Actualmente estoy enfocado en ser desarrollador full stack especializado en Frontend.
                    </Paraghap>
                    <Paraghap>
                        Poseo habilidades en tecnologías como React.js, los estándares HTML, CSS & JavaScript, 
                        tecnologías de tipado como TypeScript, habilidades con API REST, entre otras.
                    </Paraghap>
                    <Paraghap>
                        Para mí es muy importante estar actualizado con las últimas tecnologías y tendencias 
                        de esta apasionante industria, desde nuevos frameworks hasta la inteligencia artificial, 
                        para estar siempre a la vanguardia en el campo.
                    </Paraghap>                        
                </div>

                
                <SectionRight sectionID={'projects'} nameSection={'PROYECTOS'} sectionSide={'right'} srcImage={projects} ref={sectionsRef}/>                
                <div className="projects-container">
                    {
                        dataProjects.map(project => (
                            <a 
                                key={project.name}
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

                <SectionRight sectionID={'certifications'} nameSection={'CERTIFICACIONES'} sectionSide={'left'} srcImage={certification}/>
                <Certifications></Certifications>
                
                <SectionRight sectionID={'skills'} nameSection={'HABILIDADES'} sectionSide={'right'} srcImage={skills}/>       
                <SkillCard></SkillCard>

                <SectionRight sectionID={'contact'} nameSection={'CONTACTO'} sectionSide={'left'} srcImage={contact}/>  
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