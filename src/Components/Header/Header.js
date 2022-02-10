import "./styles.css";
import Link from "react-scroll/modules/components/Link";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo"></div>
      <ul className="header-nav-list">
        <Link
          className="header-nav-item"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={200}
          delay={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          About Us
        </Link>
        <Link
          className="header-nav-item"
          activeClass="active"
          to="previousWorks"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={1000}
          delay={0}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Previous Works
        </Link>
        <Link
          className="header-nav-item"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-200}
          duration={800}
          delay={0}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Get in Touch
        </Link>
      </ul>
    </header>
  );
};

export default Header;
