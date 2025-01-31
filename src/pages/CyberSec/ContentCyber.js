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

const ContentCyber = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Cyber Security Services-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            Nextweb provides professional Cyber Security Services Australia,
            designed to protect businesses from online threats, secure their
            digital assets, and enhance overall business efficiency. Whether
            you're a small business owner or run a larger enterprise, Nextweb’s
            solutions are built to meet the unique demands of Australia’s
            digital landscape.
          </p>
          <p>
            When it comes to professional Cyber Security Services, Nextweb
            stands out for its expertise and commitment to local businesses.
            Based at 103/9 Bay Street Southport, QLD 4215, we provide reliable,
            state-of-the-art security solutions tailored to the specific needs
            of businesses across Australia.
          </p>
          <p>
            With over a decade of experience, Nextweb has earned a reputation
            for delivering affordable Cyber Security Services Australia,
            customized to address the ever-evolving threats in the digital
            world. Our local expertise and close understanding of Australia
            businesses allow us to craft security strategies that protect and
            empower your operations. Call us today at 1800 365 247 for a free
            consultation.
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
            <h2>Trusted Cyber Security Services Australia for Businesses</h2>
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

export default ContentCyber;
