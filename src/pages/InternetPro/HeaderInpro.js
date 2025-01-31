import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderInpro() {
  return (
    <section
      className="bg-white text-dark text-center text-sm-start d-block w-100 header position-relative"
      style={{
        backgroundImage: "linear-gradient(179deg, #370778 30%, #ff0657 81%)",
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #fff",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage:
            "url('https://www.nextweb.com.au/wp-content/uploads/2023/08/banxt4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div className="banner-curved-bottom">
        <div className="slide-content position-relative" style={{ zIndex: 2 }}>
          <Container>
            <Row>
              {/* Left Section with Text */}
              <Col lg={6} md={6} sm={12}>
                <h2 className="mt-5 pt-5 deliver text-white">
                  Internet Programming & Web Applications Australia
                </h2>
                <div
                  className="d-sm-flex text-md-center text-md-start text-wrap"
                  id="headerhead"
                  style={{ color: "#fff" }}
                >
                  <p
                    className="deliver-paragraph mb-4 text-sm-start"
                    style={{ width: "100%", color: "#fff" }}
                  >
                    In today’s digital-driven business landscape, having robust
                    and scalable internet programming and web application
                    services is not just a luxury—it’s essential. At Nextweb
                    Australia, we specialize in providing top-tier Internet
                    Programming Services and Web Application tailored
                    specifically for businesses in Australia. Whether you're
                    looking to build custom web applications, develop mobile
                    apps, or enhance your online presence with advanced web
                    development, our expert team is ready to help your business
                    succeed.
                  </p>
                </div>
                {/* Buttons */}
                <div>
                  <Button
                    variant="primary"
                    className="text-white"
                    id="btn-2 contactusbutton"
                  >
                    CONTACT US NOW
                  </Button>
                </div>
              </Col>

              {/* Right Section with Two Images */}
              <Col lg={6} md={6} sm={12}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="img-fluid mb-4"
                    src="assets/img/ipad.png"
                    id="blob"
                    alt="Main Blob"
                    style={{ padding: "50px" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          {/* <div className="curved-shape" style={{ margin: "0", padding: "0" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 160"
              className="wave-shape"
              style={{ display: "block", width: "100%" }}
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L48,58.7C96,53,192,42,288,42C384,42,480,53,576,64C672,75,768,86,864,85.3C960,84,1056,71,1152,64C1248,57,1344,53,1392,58.7L1440,64L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
              ></path>
            </svg>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeaderInpro;
