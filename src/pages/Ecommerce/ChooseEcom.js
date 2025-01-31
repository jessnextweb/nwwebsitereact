import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseEcom = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>We Choose Nextweb for E-Commerce Development?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              Our solutions are designed to provide businesses with
              state-of-the-art marketing services, such as SEO (Search Engine
              Optimization), Growth marketing, social media optimization, and
              pay-per-click advertising, all of which are crucial for building
              an online presence. We also incorporate content marketing,
              ensuring that your brand's voice resonates with your audience,
              driving engagement and conversions.
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/E-Commerce Application Development-2.jpg"
                alt="Transparent Service"
                className="img-fluid top-image"
                style={{
                  maxWidth: "100%",
                  borderRadius: "5%",
                  width: "600px",
                  height: "500px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} id="contentcol" className="contentchoosepage">
            <h4
              className="mt-3 mb-2"
              style={{ fontFamily: "Oswald", fontSize: "1.25rem" }}
            >
              <i className="fa-solid fa-circle-check me-3 right"></i>Visually
              Stunning Designs
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              We craft visually appealing, responsive, and feature-rich
              e-commerce websites that reflect your brand identity and captivate
              your audience
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Mobile App
              Development
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              From iOS to Android, Nextweb can develop native and hybrid mobile
              apps that provide a frictionless shopping experience, ensuring
              your business stays accessible all the time.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Custom
              Solutions
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Nextweb understands that every business is unique. Our team
              creates tailor-made solutions that cater to your specific needs,
              from integrating payment gateways to inventory management and
              personalized customer experiences.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Security
              and Performance
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              We prioritize the security of your platform and optimize its
              performance to provide a seamless shopping journey for your
              customers.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <div className="contentchoosepage">
              <p>
                Nextweb’s design experts create intuitive and visually stunning
                interfaces that enhance user engagement, navigation, and
                conversion rates. Rigorous testing ensures e-commerce platforms
                function flawlessly and deliver exceptional user experiences.
                Our commitment doesn’t end with the e-portal launch.
              </p>
              <p>
                We offer ongoing support, maintenance, and updates to ensure
                your e-commerce platform remains at its best. Are you ready to
                take your business online with a fantastic e-commerce website?
                Connect with Nextweb Technologies today by sending us an email
                at info@nextweb.com.au You can also fill out our online enquiry
                form for a quick response from our technical team.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseEcom;
