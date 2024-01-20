import styled from 'styled-components';
import React, { useRef } from 'react';
import './styleMain.css';
import { dataProjects } from '../../utils/dataProjects';
import { SkillCard } from '../Skills';
import { Sections } from '../Section_Right';
import { Certifications } from '../Certifications';
import projects from '../../../public/icons/projects.png'
import certification from '../../../public/icons/certifications.png'
import skills from '../../../public/icons/skills.png'
import contact from '../../../public/icons/contact.png'
import { AboutMe } from '../AboutMe';
import { Networks } from '../Networks';
import { Contact } from '../../Contact';

const P = styled.p`
    font-size: 18px;
    margin-bottom: 44px;
`

function Body(){

    const sectionsRef = useRef(null);


    return(         
        <>   
          <main>
               <AboutMe></AboutMe>
                
                <Sections sectionID={'projects'} nameSection={'MIS PROYECTOS'} sectionSide={'right'} srcImage={projects} ref={sectionsRef}/>                
                <P>A continuación, podrás ver algunos de mis mejores proyectos.</P>
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

                <Sections sectionID={'certifications'} nameSection={'MIS CERTIFICACIONES'} sectionSide={'left'} srcImage={certification}/>
                <Certifications></Certifications>
                
                <Sections sectionID={'skills'} nameSection={'MI STACK DE DESARROLLO'} sectionSide={'right'} srcImage={skills}/>       
                <SkillCard></SkillCard>

                <Sections sectionID={'contact'} nameSection={'CONTACTAME'} sectionSide={'left'} srcImage={contact}/>  
                <Contact></Contact>
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