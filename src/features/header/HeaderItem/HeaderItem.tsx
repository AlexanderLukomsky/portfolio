import { Link } from "react-scroll"

export const HeaderItem: React.FC<PropsType> = ({ linkTo, title }) => {
   return (
      <li className="header__item">
         <Link
            activeClass="active"
            to={linkTo} duration={600} smooth={true} offset={0} spy={true}>
            {title}
         </Link>
      </li>
   )
}
type PropsType = {
   linkTo: string
   title: string
}