import { useSelector } from "react-redux";
import "./common/styles/App.scss";
import { CustomSnackbar } from "./components/CustomSnackbar/CustomSnackbar";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Footer } from "./features/footer/Footer";
import { Header } from "./features/header/Header";
import { Hire } from "./features/hire/Hire";
import { Main } from "./features/main/Main";
import { Projects } from "./features/projects/Projects";
import { Skills } from "./features/skills/Skills";
import { selectAppNoticeState } from "./utils";
import { Routes, Route, Navigate } from "react-router-dom";
import { CV_ALL_JOBS } from "./components/cv-all/CV_ALL_JOBS";

const MainPage = () => {
  const appNoticeState = useSelector(selectAppNoticeState);
  return (
    <>
      <ScrollToTop />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Hire />
      <Footer />
      {!!appNoticeState.appNotice && (
        <CustomSnackbar appNoticeState={appNoticeState} />
      )}
    </>
  );
};

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<MainPage />} />
        <Route path="/" element={<Navigate to={"/portfolio"} />} />
        <Route path="/*" element={<Navigate to={"/portfolio"} />} />

        <Route path="/cv" element={<CV_ALL_JOBS />} />
      </Routes>
    </div>
  );
};
