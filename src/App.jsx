import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBars/NavBar";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Articles from "./components/Articles/Articles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
