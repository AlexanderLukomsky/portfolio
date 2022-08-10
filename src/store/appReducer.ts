import { createSlice } from "@reduxjs/toolkit";
import reactLogo from "../common/assets/skillsImg/reactLogo.svg";
import tsLogo from "../common/assets/skillsImg/tsLogo.svg";
import reduxLogo from "../common/assets/skillsImg/reduxLogo.svg";
import jsLogo from "../common/assets/skillsImg/jsLogo.svg";
import sassLogo from "../common/assets/skillsImg/sassLogo.svg";
import htmlLogo from "../common/assets/skillsImg/htmlLogo.svg";
import { v1 } from "uuid";
const initState = {
   skills: [
      { skill: 'React', img: reactLogo, id: v1() },
      { skill: 'TypeScript', img: tsLogo, id: v1() },
      { skill: 'Redux', img: reduxLogo, id: v1() },
      { skill: 'JS', img: jsLogo, id: v1() },
      { skill: 'HTML & CSS', img: sassLogo, id: v1() },
      { skill: 'SASS', img: htmlLogo, id: v1() },
   ],
   projects: [
      {
         img: 'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg'
      },
      {
         img: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'
      },
      {
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V1WYJU4ox2L8sXZFbAk7A2uaGstLAb6sWQ&usqp=CAU'
      },
   ],
   contacts: {}
}
const slice = createSlice({
   name: 'app',
   initialState: initState,
   reducers: {
      app: () => {

      }
   }
})
export const appReducer = slice.reducer