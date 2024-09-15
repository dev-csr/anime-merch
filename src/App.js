import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Manga from "./Components/Manga";
import Recommended from "./Components/Recommended";
import Figurine from "./Components/Figurine";
import Accessories from "./Components/Accessories";
import Apparels from "./Components/Apparels";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <Recommended />
        <Manga />
        <Figurine />
        <Accessories />
        <Apparels />
      </header>
    </div>
  );
}

export default App;
