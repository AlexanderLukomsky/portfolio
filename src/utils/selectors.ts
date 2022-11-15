import { AppStoreType } from "../store";

export const selectLinkCV = (state: AppStoreType) => state.app.cv;
export const selectSkills = (state: AppStoreType) => state.app.skills;
export const selectProjects = (state: AppStoreType) => state.app.projects;
export const selectFormState = (state: AppStoreType) => state.app.formState;
export const selectContacts = (state: AppStoreType) => state.app.contacts;
export const selectIsShowScrollElem = (state: AppStoreType) =>
  state.app.isShowScrollElem;

export const selectAppNoticeState = (state: AppStoreType) =>
  state.app.appNoticeState;
