import React, { useState } from "react";
import { useAppSelector } from "../../store/store";
import "./header.scss";
import { HeaderBurgerNav } from "./HeaderBurgerNav/HeaderBurgerNav";
import { HeaderNav } from "./HeaderNav/HeaderNav";
export const Header = React.memo(() => {
   const isShowScrollElem = useAppSelector(state => state.app.isShowScrollElem)
   const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
   return (
      <header className={`header ${isShowScrollElem ? 'scroll' : ''}`} id="header">
         <div className="container">
            <HeaderNav />
            <HeaderBurgerNav isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
         </div>
         {isOpenMenu && <span onClick={() => { setIsOpenMenu(!isOpenMenu) }} className="dropdown-background"></span>}
      </header>
   )
})