import React from 'react';
import './styleMain.css';
import { dataProjects } from '../../utils/dataProjects';
import { SkillCard } from '../Skills';
import { SectionRight } from '../Section_Right';

function Body(){
    return(
        <>   
          <main>
                <SectionRight nameSection={'ABOUT ME'} sectionSide={'left'}/>  
                <div className='about-me'>
                    <p>
                        Hello! My name is <strong>Eduardo Rireyes</strong> and I am a passionate web developer 
                        from <strong>Guatemala</strong>, aged <strong>22</strong>. I love creating 
                        innovative and functional digital solutions through web development. With strong 
                        technical skills in technologies like <strong>HTML</strong>, <strong>CSS</strong>, 
                        and <strong>JavaScript</strong>, as well as experience with popular frameworks like 
                        <strong> React</strong>, I can design and develop attractive and efficient websites with 
                        an excellent user experience.
                    </p>
                    <p>
                        I am studying <strong>Web Development</strong>, with a focus on becoming a specialized 
                        <strong> FullStack Developer</strong> with expertise in <strong>frontend</strong> development. 
                        I stay updated with the latest trends and technologies in the industry, 
                        ranging from <strong>new frameworks</strong> to <strong>Artificial Intelligence</strong>, to always stay at 
                        the forefront of the field.
                    </p>
                </div>

                
                <SectionRight nameSection={'PROJECTS'} sectionSide={'right'}/>                
                <div className="projects-container">
                    {
                        dataProjects.map(project => (
                            <a 
                                className="section-project" 
                                href={project.address} 
                                target="blank"
                            >
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

                <SectionRight nameSection={'SKILLS'} sectionSide={'left'}/>       
                <SkillCard></SkillCard>

                <SectionRight nameSection={'CONTACT'} sectionSide={'right'}/>  
                <div></div>
          </main>

        </>
    );
}

export { Body }