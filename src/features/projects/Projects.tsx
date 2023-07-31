import { ProjectsSlider } from "./projectsSlider/ProjectsSlider";
import { Title } from "components/title";
import "./projects.scss";

export const Projects = () => {
  return (
    <section className="projects blockPadding" id="projects">
      <div className="container">
        <Title text="Projects" />
        <ProjectsSlider />
      </div>
    </section>
  );
};
