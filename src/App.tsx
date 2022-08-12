
import './common/styles/App.scss';
import { CustomSnackbar } from './components/CustomSnackbar/CustomSnackbar';
import { Footer } from './features/footer/Footer';
import { Header } from './features/header/Header';
import { Hire } from './features/hire/Hire';
import { Main } from './features/main/Main';
import { Projects } from './features/projects/Projects';
import { Skills } from './features/skills/Skills';
import { useAppSelector } from './store/store';
export const App = () => {
  const appNoticeState = useAppSelector(state => state.app.appNoticeState)
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Hire />
      <Footer />
      {!!appNoticeState.appNotice && <CustomSnackbar appNoticeState={appNoticeState} />}
    </div>
  );
}
