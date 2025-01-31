import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NativeHeader() {
  return (
    <section
      className="bg-white text-dark text-center text-sm-start d-block w-100 header position-relative"
      style={{
        backgroundImage: "linear-gradient(179deg, #370778 30%, #ff0657 81%)",
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
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
      <div className="slide-content position-relative" style={{ zIndex: 2 }}>
        <Container>
          <Row>
            {/* Left Section with Text */}
            <Col lg={6} md={6} sm={12}>
              <h2 className="mt-5 pt-5 deliver text-white">
                Native Cloud App Development
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
                  Nextweb is your gateway to cutting-edge native cloud app
                  development solutions to empower your business to thrive in
                  the digital age in Australia. With a relentless passion for
                  innovation and a commitment to excellence, we specialize in
                  crafting cloud-native applications that harness the power of
                  cloud computing to transform your business operations.
                  Cloud-native apps are accessible from anywhere with an
                  internet connection. They can leverage content delivery
                  networks (CDNs) for global performance.
                </p>
              </div>

              {/* Buttons */}
              <div>
                <Button
                  variant="primary"
                  id="btn-2 contactusbutton"
                  className="text-white  "
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
                  src="assets/img/androidbanner.png"
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
            class="wave-shape"
            style={{
              display: "block",
              width: "100%",
              border: "none",
              margin: "0",
              padding: "0",
            }}
          >
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,64L48,58.7C96,53,192,42,288,42C384,42,480,53,576,64C672,75,768,86,864,85.3C960,84,1056,71,1152,64C1248,57,1344,53,1392,58.7L1440,64L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
            ></path>
          </svg>
        </div> */}
      </div>
    </section>
  );
}

export default NativeHeader;
