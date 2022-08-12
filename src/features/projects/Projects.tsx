import { Title } from "../../components/Title/Title"
import "./projects.scss"
import { ProjectsSlider } from "./projectsSlider/ProjectsSlider"
export const Projects = () => {
   return (
      <section className='projects blockPadding' id="projects">
         <div className="container">
            <Title text='Projects' />
            <ProjectsSlider />
         </div>
      </section>
   )
}