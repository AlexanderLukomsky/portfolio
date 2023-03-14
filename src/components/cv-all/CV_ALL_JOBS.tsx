import { Navigate } from "react-router-dom";
import CV_ALL from "./CV_all.pdf";

export const CV_ALL_JOBS = () => {
  window.open(CV_ALL, "_self");

  return <Navigate to="/portfolio" />;
};
