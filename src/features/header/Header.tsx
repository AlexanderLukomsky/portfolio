import { ItemLi } from "../../components/item/ItemLi"
import "./header.scss";
export const Header = () => {
   return (
      <header className='header' id="header">
         <div className="container">
            <nav className="header__nav">
               <ul className="header__list">
                  <ItemLi className="header__item"><a href="#main">Main</a></ItemLi>
                  <ItemLi className="header__item"><a href="#skills">Skills</a></ItemLi>
                  <ItemLi className="header__item"><a href="#projects">Projects</a></ItemLi>
                  <ItemLi className="header__item"><a href="#contacts">Contacts</a></ItemLi>
               </ul>
            </nav>
         </div>
      </header>
   )
} 