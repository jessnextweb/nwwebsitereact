import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseInpro = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="mb-4 text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Here’s Why Businesses in Australia Trust Us</h2>
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
                src="assets/img/Internet Programming & Web Applications-2.jpg"
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
              <i className="fa-solid fa-circle-check me-3 right"></i>Local
              Expertise:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              As a business operating in Australia, we understand the local
              market and its unique needs, enabling us to tailor solutions for
              businesses in the region.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Better
              Advanced Technology:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              We leverage the latest technologies and frameworks in Web
              Application Development to deliver cutting-edge results.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>
              Comprehensive Services:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              From custom web applications to e-commerce development and mobile
              app development, we offer a range of services that meet the needs
              of businesses across Australia.
            </p>
            <h4 mt-3 mb-2>
              {/* <i className="fa-solid fa-circle-check me-2 right"></i>Local Expertise: */}
            </h4>
            <p className="mb-4">
              For inquiries or to discuss your software requirements, call us at
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215.</strong> Partnering
              with Nextweb means working with a local team that delivers
              results-driven, cost-effective, and scalable solutions, all
              designed to improve your business’s digital presence and
              operational efficiency.
            </p>
          </Col>
        </Row>
        {/* <p>
          Partnering with Nextweb means working with a local team that delivers
          results-driven, cost-effective, and scalable solutions, all designed
          to improve your business’s digital presence and operational
          efficiency.
        </p> */}

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p className="contentchoosepage1"></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseInpro;
