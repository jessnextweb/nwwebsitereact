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

const ContentDigital = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/dmarket.jpeg",
      content: (
        <div className="contentsubpage">
          <p>
            As more consumers turn to online platforms to discover and engage
            with local businesses, having a solid digital marketing strategy
            ensures that your business remains competitive. Whether you need
            help with search engine optimization (SEO), website development, or
            social media marketing, Nextweb provides professional services that
            meet the specific needs of both residents and businesses in Gold
            Coast, Australia.
          </p>
          <p>
            When it comes to Digital marketing Australia, Nextweb’s local
            expertise and commitment to client success make them the go-to
            choice. We are dedicated to helping businesses not only grow but
            thrive in the digital landscape.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="androidhome" className="androidhome">
      <Container
        // id="contentdigi"
        style={{ padding: "0px 50px 50px 50px", border: "1px solid #fff" }}
      >
        {/* Add Header Section */}
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <p>Nextweb Pty Ltd</p>
            <h2>
              Digital Marketing Australia: Your Go-to Expert for Digital Success
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

export default ContentDigital;
