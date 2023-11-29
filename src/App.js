import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { ColorProvider } from "./components/ColorContext";
import Releases from "./Pages/Releases";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <ColorProvider>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      </ColorProvider>
    </>
  );
}

export default App;
