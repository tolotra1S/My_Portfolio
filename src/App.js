import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About/About";
import { Formation } from "./components/Pages/Formation/Formation";
import { Contact } from "./components/Pages/Contact/Contact";
import { Competence } from "./components/Pages/Competence/Competence";

function App() {
  return (
    <>
      {/* <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/formation" component={Formation} />
            <Route path="/contact" component={Contact} />
            <Route path="/competence" component={Competence} />
          </Switch>
        </div>
      </Router> */}
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
