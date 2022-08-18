import React from "react";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem"
import "./headerNav.scss";
export const HeaderNav = React.memo(() => {
   return (
      <nav className="nav header-nav">
         <ul className="header-nav__list">
            <HeaderNavItem linkTo="main" title={'Main'} />
            <HeaderNavItem linkTo="skills" title={'Skills'} />
            <HeaderNavItem linkTo="projects" title={'Projects'} />
            <HeaderNavItem linkTo="hire" title={'Contacts'} />
         </ul>
      </nav>
   )
})