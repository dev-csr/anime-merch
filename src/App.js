import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Manga from "./Components/Manga";
import Recommended from "./Components/Recommend/Recommended";
import Figurine from "./Components/Figurine";
import Accessories from "./Components/Accessories";
import Apparels from "./Components/Apparels";
import AllManga from "./Components/Manga/AllManga";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Recommended />
                <Manga />
                <Figurine />
                <Accessories />
                <Apparels />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
                <Recommended />
                <Manga />
                <Figurine />
                <Accessories />
                <Apparels />
              </>
            }
          />
          <Route
            path="/recommended"
            element={
              <>
                <Header />
                <Recommended />
              </>
            }
          />
          <Route
            path="/Manga/AllManga"
            element={
              <>
                <Header />
                <AllManga />
              </>
            }
          />
          <Route
            path="/figurine"
            element={
              <>
                <Header />
                <Figurine />
              </>
            }
          />
          <Route
            path="/accessories"
            element={
              <>
                <Header />
                <Accessories />
              </>
            }
          />
          <Route
            path="/apparels"
            element={
              <>
                <Header />
                <Apparels />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
