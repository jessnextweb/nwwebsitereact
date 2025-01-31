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

const ContentSeo = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/SEO-1.jpg",
      content: (
        <div className="contentsubpage">
          <p></p>
          <p>
            Search engine optimization (SEO) is a vital service for any business
            looking to thrive online. At Nextweb, we specialize in Search engine
            optimization Australia, providing tailored strategies that boost
            your website’s visibility, drive traffic, and help businesses
            dominate local searches. Whether you’re a small business or a large
            enterprise, our team of SEO experts ensures you stay competitive in
            the digital landscape. The importance of SEO services in Australia
            is undeniable. With more businesses going digital, it’s essential to
            have a robust SEO strategy that keeps you ahead. Our services are
            designed for local businesses, providing easy access to professional
            SEO that’s proven to deliver results.
          </p>
          <p>
            Expertise in SEO Australia with over a decade of experience.
            Business-tailored strategies aimed at maximizing your ROI.
            Professional, reliable service that aligns with Google’s SEO best
            practices.
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
              Professional Search Engine Optimization Services for Businesses
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

export default ContentSeo;
