import React from 'react'
import styles from './Projectsstyles.module.css'
import bgc from '../../assets/images (1).jpeg'
import lawImage from '../../assets/images.jpeg'
import roadrunner from '../../assets/road-runner.jpeg'
import netflix from '../../assets/netflix.jpeg'
import ProjectsCard from '../../common/ProjectsCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard src={bgc }
          link ="https://github.com/rayAritra/BackGroundColourChanger_react"
          h3="Background Colour Changer"
          p="A Backgroung Colour Changing App"/>

        <ProjectsCard src={lawImage}
          link ="https://github.com/rayAritra/WST-Assignment-2"
          h3="Law Lime "
          p=" Communicate with the layers"/>
          <ProjectsCard src={roadrunner }
          link ="https://github.com/rayAritra/Road_Runner"
          h3="Road-Runner"
          p="Future opportunities of students"/>
          <ProjectsCard src={netflix }
          link ="https://github.com/rayAritra/Road_Runner"
          h3="Netflix Clone"
          p="Fully responsive ui clone"/>
      </div>
      </section>
  )
}

export default Projects;