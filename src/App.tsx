
import './common/styles/App.scss';
import { Footer } from './features/footer/Footer';
import { Header } from './features/header/Header';
import { Hire } from './features/hire/Hire';
import { Main } from './features/main/Main';
import { Projects } from './features/projects/Projects';
import { Skills } from './features/skills/Skills';
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Hire />
      <Footer />
    </div>
  );
}
