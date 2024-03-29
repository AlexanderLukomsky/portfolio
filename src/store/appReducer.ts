import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import reactLogo from "../common/assets/skillsImg/reactLogo.svg";
import tsLogo from "../common/assets/skillsImg/tsLogo.svg";
import reduxLogo from "../common/assets/skillsImg/reduxLogo.svg";
import jsLogo from "../common/assets/skillsImg/jsLogo.svg";
import sassLogo from "../common/assets/skillsImg/sassLogo.svg";
import htmlLogo from "../common/assets/skillsImg/htmlLogo.svg";
import { v1 } from "uuid";
import { formAPI, FormDataType } from "../api/form-api";
import gitRepo from "../common/assets/projectsImg/gitRepo.png";
import onlineZoo from "../common/assets/projectsImg/onlineZoo.png";
import social from "../common/assets/projectsImg/social.png";
import todolist from "../common/assets/projectsImg/todolist.png";
import packs from "../common/assets/projectsImg/packs.png";
import shopCart from "../common/assets/projectsImg/shopCart.png";
import { AppThunk } from "./types";
import CV from "../common/assets/cv/lukomsky.alexander@gmail.com.pdf";

const initState = {
  skills: [
    { skill: "React", img: reactLogo, id: v1() },
    { skill: "TypeScript", img: tsLogo, id: v1() },
    { skill: "Redux", img: reduxLogo, id: v1() },
    { skill: "JS", img: jsLogo, id: v1() },
    { skill: "HTML & CSS", img: sassLogo, id: v1() },
    { skill: "SASS", img: htmlLogo, id: v1() },
  ],
  projects: [
    {
      img: packs,
      src: "https://alexanderlukomsky.github.io/cards/#/packs",
      title: null,
    },
    {
      img: social,
      src: "https://alexanderlukomsky.github.io/social-network/#/profile",
      title: null,
    },
    {
      img: onlineZoo,
      src: "https://rolling-scopes-school.github.io/alexanderlukomsky-JSFE2022Q3/online-zoo/pages/main/",
      title: null,
    },
    {
      img: todolist,
      src: "https://alexanderlukomsky.github.io/tlist-hw/#/todolists",
      title: null,
    },
    {
      img: shopCart,
      src: "https://alexanderlukomsky.github.io/shop-cart/#/products",
      title: null,
    },
    {
      img: gitRepo,
      src: "https://github.com/AlexanderLukomsky?tab=repositories",
      title: "Link to other projects",
    },
  ],
  formState: {
    formStatus: "idle" as StatusesType,
    formData: {
      name: "",
      email: "",
      message: "",
    },
  },
  contacts: {
    githubLink: "https://github.com/AlexanderLukomsky",
    linkedInLink: "https://www.linkedin.com/in/alexander-lukomsky-3a6a87256",
  },
  cv: CV,

  appNoticeState: {
    appNotice: "",
    isError: false,
  },
  isShowScrollElem: false,
};
const slice = createSlice({
  name: "app",
  initialState: initState,
  reducers: {
    setAppNotice(
      state,
      action: PayloadAction<{ appNotice: string; isError: boolean }>
    ) {
      state.appNoticeState = action.payload;
    },
    setFormName(state, action: PayloadAction<{ name: string }>) {
      state.formState.formData.name = action.payload.name;
    },
    setFormEmail(state, action: PayloadAction<{ email: string }>) {
      state.formState.formData.email = action.payload.email;
    },
    setFormMessage(state, action: PayloadAction<{ message: string }>) {
      state.formState.formData.message = action.payload.message;
    },
    setFormStatus(state, action: PayloadAction<{ status: StatusesType }>) {
      state.formState.formStatus = action.payload.status;
    },
    setIsShowScrollElem(
      state,
      action: PayloadAction<{ isShowScrollElem: boolean }>
    ) {
      state.isShowScrollElem = action.payload.isShowScrollElem;
    },
    setFormSubmitResultState(state, action: PayloadAction<SetAppStateStatus>) {
      state.formState.formStatus = action.payload.formStatus;
      state.appNoticeState.appNotice = action.payload.appNotice;
      state.appNoticeState.isError = action.payload.isError;
      state.formState.formData = action.payload.formData
        ? action.payload.formData
        : state.formState.formData;
    },
  },
});
export const {
  setAppNotice,
  setFormName,
  setFormEmail,
  setFormMessage,
  setFormSubmitResultState,
  setIsShowScrollElem,
} = slice.actions;

export const submitForm =
  (formData: FormDataType): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setFormStatus({ status: "pending" }));
    try {
      await formAPI.sendForm(formData);
      dispatch(
        setFormSubmitResultState({
          formData: { name: "", email: "", message: "" },
          formStatus: "idle",
          appNotice: "Message sent successfully",
          isError: false,
        })
      );
    } catch (e) {
      dispatch(
        setFormSubmitResultState({
          formStatus: "idle",
          appNotice: "An unexpected error occurred, please try again",
          isError: true,
        })
      );
    }
  };
export const appReducer = slice.reducer;
type StatusesType = "idle" | "pending" | "succeeded" | "failed";
type SetAppStateStatus = {
  formStatus: StatusesType;
  appNotice: string;
  isError: boolean;
  formData?: { name: ""; email: ""; message: "" };
};
