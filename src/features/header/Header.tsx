import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsShowScrollElem } from "../../utils";
import "./header.scss";
import { HeaderBurgerNav } from "./HeaderBurgerNav/HeaderBurgerNav";
import { HeaderNav } from "./HeaderNav/HeaderNav";

export const Header = React.memo(() => {
  const isShowScrollElem = useSelector(selectIsShowScrollElem);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <header
      className={`header ${isShowScrollElem ? "scroll" : ""}`}
      id="header"
    >
      <div className="container">
        <HeaderNav />
        <HeaderBurgerNav
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
      </div>
      {isOpenMenu && (
        <span
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
          className="dropdown-background"
        ></span>
      )}
    </header>
  );
});
