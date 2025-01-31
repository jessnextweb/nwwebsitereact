import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseIntell = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Here’s Why Businesses in Australia Trust Us</h2>
          </Col>
        </Row>

        {/* Content Section */}

        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              When it comes to Data Intelligence Services in Australia, Nextweb
              stands out for our local expertise, professionalism, and
              commitment to eco-friendly solutions. Our team of data specialists
              is highly trained and experienced in managing large-scale data
              operations while ensuring compliance with the latest data security
              standards.
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/Data - Intelligence & Management-2.jpg"
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
              <i className="fa-solid fa-circle-check me-3 right"></i>Improved
              Decision-Making
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              With accurate and clean data, your business can make better,
              data-driven decisions that align with long-term goals.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Increased
              Efficiency
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Automated processes and advanced analytics can streamline your
              operations, saving you time and resources.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Data
              Security
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Our solutions ensure your data is secure, reducing the risk of
              breaches and maintaining compliance with regulations
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Competitive
              Advantage
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              With access to advanced Predictive Modeling and Data Analysis
              services, your business can stay ahead of competitors by
              leveraging actionable insights.
            </p>
          </Col>
        </Row>
        <p>
          Our local team understands the specific environmental challenges in
          Australia and offers tailored solutions to address them. Whether you
          need expert Data Analysis and Exploration or Data Cleaning Services,
          we ensure that your data is optimized for both efficiency and
          security.
        </p>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            <p className="contentchoosepage">
              Located at 103/9 Bay Street Southport, QLD 4215, and available via
              phone at 1800 365 247, we are committed to delivering exceptional
              service across Australia. Our eco-friendly practices not only help
              your business save resources but also contribute to a sustainable
              future. Choosing Nextweb means working with professionals who are
              as dedicated to your data’s security as they are to providing
              actionable insights that drive business growth.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseIntell;
