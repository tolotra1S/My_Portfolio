import "./App.css";
import  NavBar  from "./components/NavBar/NavBar";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { Competence } from "./components/Pages/Competence/Competence";
import { Formation } from "./components/Pages/Formation/Formation";
import { Contact } from "./components/Pages/Contact/Contact";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Formation />
      <Contact />
      <Competence />
    </>
  );
}

export default App;
