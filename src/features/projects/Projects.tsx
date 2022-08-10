import { useState } from "react"
import { Title } from "../../components/title/Title"
import "./projects.scss"
import { ProjectsSlider } from "./projectsSlider/ProjectsSlider"
export const Projects = () => {
   return (
      <section className='projects' id="projects">
         <div className="container">
            <Title text='Projects' />
            <ProjectsSlider />
         </div>
      </section>
   )
}