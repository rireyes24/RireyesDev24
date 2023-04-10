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
                    <p>Hello! My name is Eduardo Rireyes and I am a passionate web developer from Guatemala, aged 22. I love creating innovative and functional digital solutions through web development. With strong technical skills in technologies like HTML, CSS, and JavaScript, as well as experience with popular frameworks like React, I can design and develop attractive and efficient websites with an excellent user experience.</p>
                    <p>I am studying Web Development, with a focus on becoming a specialized FullStack Developer with expertise in frontend development. I stay updated with the latest trends and technologies in the industry, ranging from new frameworks to artificial intelligence, to always stay at the forefront of the field.</p>
                </div>

                
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