import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./scrollToTop.scss";
import { IconButton } from "@mui/material";
import { selectIsShowScrollElem } from "../../utils";
import { useSelector } from "react-redux";

export const ScrollToTop = React.memo(() => {
  const isShowScrollBtn = useSelector(selectIsShowScrollElem);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`scroll-btn ${isShowScrollBtn ? "show" : ""}`}>
      <IconButton onClick={goToTop}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </div>
  );
});
