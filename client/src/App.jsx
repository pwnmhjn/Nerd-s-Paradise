import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReaderLayout from "./Megapages/ReaderLayout.jsx";

import IndexLayout from "./Megapages/IndexLayout.jsx";
import "./App.css";
import IndexAbout from "./Pages/IndexAbout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout />}></Route>
        <Route path="/Reader" element={<ReaderLayout />}></Route>
        <Route path="/about" element={<IndexAbout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
