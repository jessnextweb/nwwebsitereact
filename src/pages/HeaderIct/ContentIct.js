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

const ContentIct = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Consultancy ICT Professional Services-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            Our solutions are designed to streamline business processes,
            minimize IT risks, and reduce operational costs while ensuring peak
            performance. From large enterprises to small businesses, Nextweb
            offers scalable, customizable ICT services that foster sustainable
            growth. No More Downtime: Instant Solutions for Tech Disruptions
            Facing sudden IT issues that disrupt your business operations? With
            ICT Professional Services Australia, downtime is a thing of the
            past. We provide immediate, real-time solutions to keep your systems
            running smoothly. Our expert team identifies and resolves issues on
            the spot, ensuring your business stays productive without the stress
            of tech glitches.
          </p>
          {/* <p>
            Our expert implementation of AI-driven analytics enhances
            decision-making with data-backed insights, while block chain
            technology ensures secure transactions and operations. Furthermore,
            IoT solutions bring a new level of connectivity and automation to
            business operations. With Nextweb, your business is not just keeping
            up with technological changes but is setting the pace in the
            industry.
          </p> */}
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
            <h2>ICT Professional Services / Consulting for businesses</h2>
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

export default ContentIct;
