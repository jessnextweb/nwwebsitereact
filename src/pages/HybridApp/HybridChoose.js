import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HybridChoose = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb for Hybrid App Development?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p>
              The hybrid apps Nextweb develops, takes full advantage of the
              mobile device’s hardware and software capabilities. Here are some
              of the advantages of deploying hybrid apps developed by Nextweb:
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/chooseandroid.jpeg"
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
              <i className="fa-solid fa-circle-check me-2 right"></i>
              Cross-Platform Compatibility
            </h5>
            <p className="mb-4">
              Hybrid apps we develop can run on multiple platforms. It allows us
              to write code once and deploy it across different platforms,
              reducing development time and costs compared to building separate
              native apps for each platform.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>
              User-Friendly Interface Design
            </h5>
            <p className="mb-4">
              Nextweb’s hybrid apps have an intuitive and user-friendly
              interface that gives an effortless user experience across
              different devices and screen sizes. Our hybrid app designs have
              proven to match the performance of fully native apps by providing
              a smooth and responsive user interface design.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Extended
              Support & Continuous Improvement
            </h5>
            <p className="mb-4">
              Hybrid apps are relatively easy to maintain and support, with
              updates and bug fixes being applied across platforms
              simultaneously. Our hybrid app development team is up-to-date with
              the latest advancements in new hybrid technologies, enabling
              Nextweb to continuously improve your app.
            </p>
            <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-2 right"></i>Improved
              Security & Privacy
            </h5>
            <p className="mb-4">
              Nextweb’s hybrid app designs ensures data security and user
              privacy. We keep your apps and libraries up-to-date with the
              latest security patches. Thus constantly reviewing and updating
              your apps security features to stay ahead of emerging threats.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <div>
              <p className="mb-4">
                Nextweb’s hybrid app development platform provides advantages
                like faster development, cost-effectiveness, code reusability,
                and broader platform support. However, they may have limitations
                in performance compared to full native apps, especially for
                resource-intensive applications that require deep integration
                with specific device capabilities. Do you believe hybrid app
                development is the only way to solve your business technology
                needs? Then please leave a message on our online enquiry form;
                alternatively you can email us at info@nextweb.com.au to know
                how we can help!
              </p>
              {/* <p className="mb-4">
                If you need to discuss your business idea for creating an
                Android app for your product or service. Please do not hesitate
                to speak to our technical team. We will go through the nuances
                of your requirements to create a detailed project plan for them.
                Please fill out our enquiry form or email us at
                info@nextweb.com.au
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HybridChoose;
