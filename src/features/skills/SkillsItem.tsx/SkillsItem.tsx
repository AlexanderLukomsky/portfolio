import { ItemLi } from "../../../components/ItemLI/ItemLi"
import Tilt from 'react-parallax-tilt';
export const SkillsItem: React.FC<PropsType> = (
   { logoImg, text }
) => {
   return (
      <ItemLi className="skills__item"  >
         <div className="skills__img">
            <Tilt>
               <img src={logoImg} alt={`${text} logo`} />
            </Tilt>
         </div>
         <h3 className="skills__title">{text}</h3>
      </ItemLi>
   )
}
type PropsType = {
   logoImg: string
   text: string
}