import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Hero from "./components/hero/Hero";
import css from './styles/app.module.scss';

const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Experties />
    <Works />
    <Portfolio />
    <People />
    <Footer />
  </div>
};        

export default App;
