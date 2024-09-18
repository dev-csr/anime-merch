import "./Components.css";
import logo from "./merchandise-high-resolution-logo.png";
import { useState, useEffect } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".navbar")) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <button className="menu-toggle" onClick={toggle}>
          &#9776;
        </button>
        <div className={`nav-links ${isOpen ? "show" : ""}`}>
          <a href="/home">
            <img src="/images/home.png" alt="logo" />
            <span>Home</span>
          </a>
          <a href="/recommended">
            <img src="images/like.svg" alt="logo" />
            <span>Recommended</span>
          </a>
          <a href="/manga">
            <img src="/images/book.svg" alt="logo" />
            <span>Manga</span>
          </a>
          <a href="/figurine">
            <img src="/images/figurine.png" alt="logo" />
            <span>Figurines</span>
          </a>
          <a href="/accessories">
            <img src="/images/accessories.svg" alt="logo" />
            <span>Accessories</span>
          </a>
          <a href="/Apparels">
            <img src="/images/apparel.png" alt="logo" />
            <span>Apparels</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
