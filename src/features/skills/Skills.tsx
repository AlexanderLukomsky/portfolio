import { SkillsItem } from "./SkillsItem.tsx/SkillsItem";
import reactLogo from "../../common/assets/skillsImg/reactLogo.svg";
import tsLogo from "../../common/assets/skillsImg/tsLogo.svg";
import reduxLogo from "../../common/assets/skillsImg/reduxLogo.svg";
import jsLogo from "../../common/assets/skillsImg/jsLogo.svg";
import sassLogo from "../../common/assets/skillsImg/sassLogo.svg";
import htmlLogo from "../../common/assets/skillsImg/htmlLogo.svg";

export const Skills = () => {
   return (
      <section className="skills" id="skills">
         <ul className="skills__list">
            <SkillsItem logoImg={reactLogo} text="React" />
            <SkillsItem logoImg={tsLogo} text="TypeScript" />
            <SkillsItem logoImg={reduxLogo} text="Redux" />
            <SkillsItem logoImg={jsLogo} text="JS" />
            <SkillsItem logoImg={htmlLogo} text={"HTML & CSS"} />
            <SkillsItem logoImg={sassLogo} text="SASS" />
         </ul>
      </section>
   )
}