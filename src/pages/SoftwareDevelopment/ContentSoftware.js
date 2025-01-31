import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";

const TabContent = ({ title, imageUrl, content }) => (
  <Row className="mb-5 ">
    <Col xs={12} md={6}>
      <h3>{title}</h3>
      <div>{content}</div>
    </Col>
    <Col xs={12} md={6} className="text-center">
      <img
        src={imageUrl}
        alt={title}
        className="img-fluid"
        id="digitalimageid"
        style={{ width: "501px", height: "501px" }}
      />
    </Col>
  </Row>
);

const ContentSoftware = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Software Development & Consulting Services-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            For businesses in Australia, having a reliable software development
            partner is crucial for maintaining efficiency and gaining a
            competitive edge. At Nextweb, we offer a wide range of services—from
            end-to-end software development to consulting—helping you design,
            develop, and implement robust solutions. Whether you need to
            modernize your current systems or build new digital platforms,
            Nextweb has the expertise to get you there
          </p>
          <p>
            Nextweb's approach to software development goes beyond mere coding;
            it’s about creating strategic partnerships that propel businesses
            forward. Through their innovative solutions, they help businesses
            harness the power of technology to improve operations, engage with
            customers more effectively, and navigate the complexities of the
            digital age. This strategic integration of technology into everyday
            business processes is not just changing operations; it's setting new
            benchmarks for what businesses can achieve in the digital landscape.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="androidhome" className="androidhome">
      <Container
        id="androidid"
        // style={{ padding: "0px 50px 50px 50px", border: "1px solid #fff" }}
      >
        {/* Add Header Section */}
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <p>Nextweb Pty Ltd</p>
            <h2>
              Nextweb: Expert Software Development & Consulting Services in
              Australia
            </h2>
          </Col>
        </Row>

        {/* Render All Content */}
        {tabsData.map((tab, index) => (
          <TabContent
            key={index}
            title={tab.title}
            imageUrl={tab.imageUrl}
            content={tab.content}
            className="contentandroid"
          />
        ))}
      </Container>
    </div>
  );
};

export default ContentSoftware;
