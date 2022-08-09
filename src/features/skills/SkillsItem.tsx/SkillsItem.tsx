import { ItemLi } from "../../../components/item/ItemLi"

export const SkillsItem: React.FC<PropsType> = (
   { logoImg, text }
) => {
   return (
      <ItemLi className="skills__item"  >
         <div><img src={logoImg} alt={`${text} logo`} /></div>
         <span>{text}</span>
      </ItemLi>
   )
}
type PropsType = {
   logoImg: string
   text: string
}