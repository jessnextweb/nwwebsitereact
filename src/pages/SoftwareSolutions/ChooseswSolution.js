import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseswSolution = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb in Australia?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              As a trusted local provider, Nextweb, Australia offers
              professional and reliable software solutions that help businesses
              streamline operations and boost productivity. With years of
              experience serving the Australia area, our team of experts
              understands the importance of delivering custom, cutting-edge
              software that meets the specific needs of the region's business
              community.
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/service3.jpg"
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
              <i className="fa-solid fa-circle-check me-3 right"></i>Tailored
              Solutions
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              We develop software solutions that are specifically designed for
              your business needs, ensuring seamless integration and maximum
              efficiency.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Proven
              Expertise:
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Our team has extensive experience working with businesses across
              Australia, making us well-versed in the local market demands.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Full
              Support:
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              From concept to implementation, we provide full support throughout
              the software development lifecycle
            </p>
            <h4 mt-3 mb-2>
              {/* <i className="fa-solid fa-circle-check me-2 right"></i>Local Expertise: */}
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              For inquiries or to discuss your software requirements, call us at
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215.</strong>
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p className="contentchoosepage"></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseswSolution;
