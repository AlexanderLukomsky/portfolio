import { SkillsItem } from "./SkillsItem.tsx/SkillsItem";
import "./skills.scss";
import { Title } from "../../components/Title/Title";
import { useAppSelector } from "../../store/store";
export const Skills = () => {
   const skills = useAppSelector(state => state.app.skills)
   return (
      <section className="skills blockPadding" id="skills">
         <div className="container">
            <Title text='my skills' />
            <ul className="skills__list">
               {
                  skills.map(el =>
                     <SkillsItem key={el.id} logoImg={el.img} text={el.skill} />
                  )
               }
            </ul>
         </div>
      </section>
   )
}