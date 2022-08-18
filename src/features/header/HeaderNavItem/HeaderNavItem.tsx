import { Link } from "react-scroll"

export const HeaderNavItem: React.FC<PropsType> = ({ linkTo, title, onClickHandler }) => {
   return (
      <li className="header__nav-item">
         <Link
            onClick={() => { onClickHandler && onClickHandler(false) }}
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
   onClickHandler?: (value: boolean) => void
}