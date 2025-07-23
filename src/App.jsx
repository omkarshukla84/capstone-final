import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Destinations from "./components/pages/Destinations";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/destinations" exact component={Destinations} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
