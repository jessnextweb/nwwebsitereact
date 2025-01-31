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

const ContentCloud = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Virtual  Cloud Solutions development-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            Nextweb stands out as a premier provider of cloud solutions in
            Australia, Australia, known for our commitment to reliability and
            customer satisfaction. Our services are tailored to meet the unique
            needs of local businesses, helping them achieve their digital
            transformation goals with ease and efficiency.
          </p>
          <p>
            Cloud technology allows businesses to dynamically scale their
            resources, enabling them to adjust swiftly to demand fluctuations
            without significant capital expenditure. This scalability ensures
            that businesses only pay for the resources they use, optimizing both
            cost and system performance.
          </p>
          <p>
            Essential for facilitating remote work, cloud solutions provide
            seamless access to systems and data from any location with internet
            connectivity. This capability supports high productivity levels and
            collaboration among geographically dispersed teams, expanding the
            talent pool and operational flexibility.
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
              Nextweb: Your Gateway to Advanced Virtual Solutions in Australia
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

export default ContentCloud;
