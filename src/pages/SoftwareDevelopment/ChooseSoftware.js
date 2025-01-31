import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseSoftware = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Key Reasons to Choose Us</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}></Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/Software Development & Consulting Services-2.jpg"
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
              <i className="fa-solid fa-circle-check me-3 right"></i>Customized
              Solutions:
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Every business has unique needs. Whether you need custom software
              development, mobile applications, or system integration, we
              provide solutions that are fully aligned with your business goals.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Local
              Expertise:
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              With a deep understanding of the Australia market, we’re always
              close by for face-to-face consultations or hands-on support when
              needed.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>End-to-End
              Service:
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              From project conception to deployment, our services cover all
              phases of the software development life cycle. Whether its cloud
              application development or legacy system modernization, we’re with
              you at every step.
            </p>
            <p className="contentchoosepage">
              {" "}
              Contact us:
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215</strong>
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            {/* <p className="contentchoosepage">
              {" "}
              Contact us:
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215</strong>
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseSoftware;
