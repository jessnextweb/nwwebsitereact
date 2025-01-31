import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DigitalChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb Australia?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              Choosing the right digital marketing partner is a critical
              decision for any business. Here’s why Nextweb is the top choice
              for businesses in Australia:
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/digitalchoose.jpeg"
                alt="Transparent Service"
                className="img-fluid top-image"
                style={{
                  maxWidth: "100%",
                  borderRadius: "10% 10% 10% 10% / 10% 10% 10% 10%",
                  width: "590px",
                  height: "590px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} id="contentcol" className="contentchoosepage">
            <h5 className="mt-3 mb-2">
              <i className="fa-solid fa-circle-check me-3 right"></i>Deep Local
              Expertise
            </h5>
            <p className="mb-4">
              Understanding the Goldcoast market inside out, we create marketing
              strategies that resonate with local customers. This local
              knowledge allows us to craft campaigns that target the right
              audience with precision, ensuring higher engagement and conversion
              rates.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-3 right"></i>
              Comprehensive Digital Marketing Solutions
            </h5>
            <p className="mb-4">
              From SEO and social media marketing to website development and
              online advertising, we offer a wide range of services that cover
              every aspect of digital marketing. Our solutions are designed to
              be user-friendly and results-driven, combining creativity with
              technical expertise to help your business stand out.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-3 right"></i>
              State-of-the-Art Tools and Technology:
            </h5>
            <p className="mb-4">
              At Nextweb, we stay ahead of the curve by using cutting-edge
              digital marketing tools and software. Our team is constantly
              updating its skills and techniques to ensure that your business
              benefits from the latest innovations in the industry.
            </p>
            <h5 mt-3 mb-2>
              <i class="fa-solid fa-circle-check me-3 right"></i>Transparent and
              Reliable Service:
            </h5>
            <p className="mb-4">
              Our clients trust us because we believe in transparency. We
              provide regular reports, clear communication, and measurable
              results. You’ll always know where your marketing dollars are
              going, and you can trust that our strategies are built with
              long-term success in mind.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p className="contentchoosepage">
              For businesses seeking professional digital marketing in
              Australia, Nextweb is committed to delivering outstanding results
              that propel your business forward. Reach us at{" "}
              <strong>1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215</strong> to learn
              more about how we can help.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalChoose;
