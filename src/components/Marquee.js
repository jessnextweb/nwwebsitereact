import React, { useRef } from "react";
import "../App.css";

const Marquee = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current && marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current && marqueeRef.current.start();
  };

  return (
    <div className="marqueesection">
      {/* Marquee Section */}
      <marquee
        ref={marqueeRef}
        behavior="scroll"
        direction="left"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ flex: 1, marginRight: "120px" }}
      >
        <p style={{ margin: "12px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Embrace Nextweb’s IT Solutions for Service Excellence! &nbsp; |
            &nbsp; Utilize Nextweb’s Superlative SEO Skills for High Google
            Rankings &nbsp; | &nbsp; Harness Nextweb’s Intuitive &amp;
            Responsive Website Designs to Drive Business Growth &nbsp;
          </a>
        </p>
      </marquee>

      {/* Social Icons Section */}
      <div className="elementor-social-icons-wrapper elementor-grid">
        <span className="elementor-grid-item">
          <a
            className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f"
            href="https://www.facebook.com/NextwebAustralia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 5px",
              color: "#3b5998",
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </span>
        <span className="elementor-grid-item">
          <a
            className="elementor-icon elementor-social-icon elementor-social-icon-twitter"
            href="https://twitter.com/nextwebbrisbane"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 5px",
              color: "#1da1f2",
            }}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </span>
        <span className="elementor-grid-item">
          <a
            className="elementor-icon elementor-social-icon elementor-social-icon-google-plus-g"
            href="https://g.page/Web-Design-SEO-Company-Brisbane"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 5px",
              color: "#db4437",
            }}
          >
            <i className="fab fa-google-plus-g"></i>
          </a>
        </span>
        <span className="elementor-grid-item">
          <a
            className="elementor-icon elementor-social-icon elementor-social-icon-instagram"
            href="https://www.instagram.com/nextweb.brisbane/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 5px",
              color: "#e1306c",
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
