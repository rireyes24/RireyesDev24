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
                <div></div>

                
                <SectionRight nameSection={'PROJECTS'} sectionSide={'right'}/>                
                <div className="projects-container">
                    {
                        dataProjects.map(project => (
                            <section className="section-project">
                            
                                <a 
                                    href={project.address} 
                                    className="div-address"
                                    target="blank"
                                >
                                    <span 
                                        className="project-image" 
                                        style={{backgroundImage: `url(${project.image})`}
                                    }></span>                                
                                </a>
                                <h4 className="name-project">{project.name}</h4>
                                <p className="description-project">{project.description}</p>

                            </section>
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