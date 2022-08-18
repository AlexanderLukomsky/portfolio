import React from "react";
import { useAppSelector } from "../../store/store";
import "./header.scss";
import { HeaderItem } from "./HeaderItem/HeaderItem";
export const Header = React.memo(() => {
   const isShowScrollElem = useAppSelector(state => state.app.isShowScrollElem)
   return (
      <header className={`header ${isShowScrollElem ? 'scroll' : ''}`} id="header">
         <div className="container">
            <nav className="header__nav">
               <ul className="header__list">
                  <HeaderItem linkTo="main" title={'Main'} />
                  <HeaderItem linkTo="skills" title={'Skills'} />
                  <HeaderItem linkTo="projects" title={'Projects'} />
                  <HeaderItem linkTo="hire" title={'Contacts'} />
               </ul>
            </nav>
         </div>
      </header>
   )
})