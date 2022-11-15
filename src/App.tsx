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

export const App = () => {
  const appNoticeState = useSelector(selectAppNoticeState);
  return (
    <div className="App">
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
    </div>
  );
};
