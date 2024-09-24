import "./Components.css";
import logo from "./merchandise-high-resolution-logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

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
          {/* Replace <a> with <Link> */}
          <Link to="/home">
            <img src="/images/home.png" alt="home" />
            <span>Home</span>
          </Link>
          <Link to="/recommended">
            <img src="/images/like.svg" alt="recommended" />
            <span>Recommended</span>
          </Link>
          <Link to="/Manga/AllManga">
            <img src="/images/book.svg" alt="manga" />
            <span>Manga</span>
          </Link>
          <Link to="/figurine">
            <img src="/images/figurine.png" alt="figurine" />
            <span>Figurines</span>
          </Link>
          <Link to="/accessories">
            <img src="/images/accessories.svg" alt="accessories" />
            <span>Accessories</span>
          </Link>
          <Link to="/apparels">
            <img src="/images/apparel.png" alt="apparel" />
            <span>Apparels</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
