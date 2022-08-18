import { IconButton } from "@mui/material";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./headerBurgerNav.scss";
import React from "react";
export const HeaderBurgerNav: React.FC<PropsType> = React.memo(({ isOpenMenu, setIsOpenMenu }) => {

   return (
      <nav className={`nav header-burger-nav${isOpenMenu ? ' open' : ''}`}>
         <div className="header-burger-nav__btn" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
            <IconButton edge="end" color="inherit" aria-label="menu" >
               {isOpenMenu ? <CloseIcon></CloseIcon> : <MenuIcon />}
            </IconButton>
         </div>
         <ul className="header-burger-nav__list">
            <HeaderNavItem linkTo="main" title={'Main'} onClickHandler={setIsOpenMenu} />
            <HeaderNavItem linkTo="skills" title={'Skills'} onClickHandler={setIsOpenMenu} />
            <HeaderNavItem linkTo="projects" title={'Projects'} onClickHandler={setIsOpenMenu} />
            <HeaderNavItem linkTo="hire" title={'Contacts'} onClickHandler={setIsOpenMenu} />
         </ul>
      </nav>
   )
})
type PropsType = {
   isOpenMenu: boolean
   setIsOpenMenu: (isOpenMenu: boolean) => void
}