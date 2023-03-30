import React from 'react';
import './styleMain.css';
import { dataProjects } from '../../utils/dataProjects';
import { SkillCard } from '../Skills';

function Body(){
    return(
        <>   
          <main>
                <h2>Projects</h2>                         
                <span className="meline"></span>
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

                <h2>Skills</h2>         
                <SkillCard></SkillCard>

                <h2>Contact</h2>    
                <div></div>
          </main>

        </>
    );
}

export { Body }