import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import PreviousWorks from "./Components/PreviousWorks/PreviousWorks";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <PreviousWorks />
      <Contact />
    </div>
  );
}

export default App;
