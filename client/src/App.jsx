import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReaderLayout from "./Megapages/ReaderLayout.jsx";
import AuthorLayout from "./Megapages/AuthorLayout.jsx";
import IndexLayout from "./Megapages/IndexLayout.jsx";
import IndexAbout from "./Pages/IndexAbout.jsx";
import {
  ReaderHome,
  ReaderAbout,
  AuthorHome,
  AuthorAbout,
} from "./Pages/index.js";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout />}></Route>
        <Route path="/reader" element={<ReaderLayout />}>
          <Route path="/reader" element={<ReaderHome />}></Route>
          <Route path="/reader/about" element={<ReaderAbout />}></Route>
        </Route>
        <Route path="/author" element={<AuthorLayout />}>
          <Route path="/author" element={<AuthorHome />} />
          <Route path="/author/about" element={<AuthorAbout />} />
        </Route>
        <Route path="/indexAbout" element={<IndexAbout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
