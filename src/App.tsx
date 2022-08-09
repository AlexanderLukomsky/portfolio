
import './common/styles/App.scss';
import { Footer } from './features/footer/Footer';
import { Header } from './features/header/Header';
import { Hire } from './features/hire/Hire';
import { Main } from './features/main/Main';
import { Skills } from './features/skills/Skills';
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Hire />
      <Footer />
    </div>
  );
}
