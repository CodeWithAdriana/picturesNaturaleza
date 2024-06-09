import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Footer from "./components/Footer";
import ContextProvider from "./context/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
