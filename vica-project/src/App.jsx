import "./App.css";
import About from "./components/About/About";
import Edu from "./components/edu/edu";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Try from "./components/Try/Try";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Edu />
      <Try />
      <Work />
      <Footer />
    </>
  );
}

export default App;
