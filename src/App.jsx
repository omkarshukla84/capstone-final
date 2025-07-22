import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" exact component={Services} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
