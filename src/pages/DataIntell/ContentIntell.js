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

const ContentIntell = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Data - Intelligence & Management-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            At Nextweb, we know your business is more than just numbers—it’s
            your passion, your vision, and your hard work. That’s why our Data
            Intelligence Services go beyond simply managing data. We help you
            unlock its full potential, turning insights into actions that drive
            growth and keep you ahead of the competition.
          </p>
          <p>
            Our expert implementation of AI-driven analytics enhances
            decision-making with data-backed insights, while block chain
            technology ensures secure transactions and operations. Furthermore,
            IoT solutions bring a new level of connectivity and automation to
            business operations. With Nextweb, your business is not just keeping
            up with technological changes but is setting the pace in the
            industry.
          </p>
          <p>
            With our Australia location, we’re conveniently positioned to offer
            on-site support and consultation, ensuring personalized service and
            fast response times. Let us help you turn data into a powerful tool
            for your business. Contact us today to discuss your needs!
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
              Professional Data Intelligence & Management Services in Australia
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

export default ContentIntell;
