import "./styles.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about-title"> About Us</h1>
      <div className="about-lists-container">
        <div className="about-list-one">
          <h2 className="about-sub-title"> Our Guarantee </h2>
          <p className="about-text">
            We are extremely helpful and easy to deal with. No matter the size
            of the job, you’ll always know exactly what to expect. No hidden
            costs, just engineers you can rely on and a job done well. No charge
            for call-out, travel time, fuel, or extra for an emergency response.
          </p>
        </div>
        <div className="about-list-two">
          <h2 className="about-sub-title-services">Services</h2>
          <ul className="about-service-list">
            <li className="about-service-item-subtitle">
              Domestic & Commercial Certification{" "}
            </li>
            <li className="about-service-item">Landlord HMO Certificate</li>
            <li className="about-service-item"> EIRC</li>
            <li className="about-service-item"> PAT or FAT</li>
            <li className="about-service-item-subtitle">Domestic</li>
            <li className="about-service-item">
              Anything from light fitting to full rewire
            </li>
            <li className="about-service-item-subtitle">Commercial</li>
            <li className="about-service-item">
              Complete fitout of apartment blocks{" "}
            </li>
            <li className="about-service-item">Warehouse Lighting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
