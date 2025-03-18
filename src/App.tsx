import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SavedResults from "./components/SavedResults";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedResults />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
