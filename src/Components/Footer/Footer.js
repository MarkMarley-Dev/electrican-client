import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img"></div>
      <div className="footer-details">
        <div className="footer-address">
          <h2 className="footer-subtitle">Address</h2>
          <p className="footer-text"> 24 Forest Gate</p>
          <p className="footer-text"> Blackpool</p>
          <p className="footer-text"> FY3 9AW </p>
        </div>
        <div className="footer-img-tablet"></div>
        <div className="footer-contact">
          <h2 className="footer-subtitle">Contact Details</h2>
          <p className="footer-text"> Phone - Rhys : 07447951647 </p>
          <p className="footer-text"> Phone - James: 07970369316</p>
          <p className="footer-text"> Email : young.rhys@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
