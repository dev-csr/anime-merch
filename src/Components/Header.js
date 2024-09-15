import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <NavMenu>
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
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: RGB(66, 54, 138);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  letter-spacing: 12px;

  z-index: 3;
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 15px;

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 30px;
      min-width: 30px;
      width: 30px;
      padding: 5px;
      z-index: auto;
    }
    span {
      color: white;
      font-size: 12px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
    }
  }
`;

export default Header;
