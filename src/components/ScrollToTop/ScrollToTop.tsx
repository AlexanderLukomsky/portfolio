import React from "react";
import { useAppSelector } from "../../store/store";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./scrollToTop.scss"
import { IconButton } from "@mui/material";
export const ScrollToTop = React.memo(() => {
   const isShowScrollBtn = useAppSelector(state => state.app.isShowScrollElem)
   const goToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <div className={`scroll-btn ${isShowScrollBtn ? 'show' : ''}`} >
         <IconButton onClick={goToTop}><KeyboardArrowUpIcon /></IconButton>
      </div>
   );
});