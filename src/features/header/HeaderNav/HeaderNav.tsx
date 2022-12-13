import React from "react";
import { useSelector } from "react-redux";
import { selectLinkCV } from "../../../utils";
import { HeaderNavItem } from "../HeaderNavItem/HeaderNavItem";
import "./headerNav.scss";
export const HeaderNav = React.memo(() => {
  const cv = useSelector(selectLinkCV);
  return (
    <nav className="nav header-nav">
      <ul className="header-nav__list">
        <HeaderNavItem linkTo="main" title={"Main"} />
        <HeaderNavItem linkTo="skills" title={"Skills"} />
        <HeaderNavItem linkTo="projects" title={"Projects"} />
        <HeaderNavItem linkTo="hire" title={"Contacts"} />
        <li className="header__nav-item">
          <a href={cv}>CV</a>
        </li>
      </ul>
    </nav>
  );
});
