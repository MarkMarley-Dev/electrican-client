import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo"></div>
      <ul className="header-nav-list">
        <li className="header-nav-item">About Us</li>
        <li className="header-nav-item">Previous Works</li>
        <li className="header-nav-item">Get In Touch</li>
      </ul>
    </header>
  );
};

export default Header;
