import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import PreviousWorks from "./Components/PreviousWorks/PreviousWorks";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <PreviousWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
