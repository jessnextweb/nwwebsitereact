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

const ContentWebsite = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Website Development-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            Recently, the online business landscape has undergone a notable
            transformation, heavily influenced by the latest advancements in
            website development. As digital platforms become the primary point
            of interaction with consumers, the focus has shifted towards
            creating more intuitive, engaging, and user-friendly websites.
            Companies like Nextweb have been pivotal in driving this change by
            developing websites that not only meet the aesthetic expectations of
            users but also enhance functionality and accessibility.{" "}
          </p>
          <p>
            The trend towards responsive design has become more pronounced, with
            businesses prioritizing mobile-friendly websites to cater to the
            ever-increasing number of mobile users. This approach has proven
            essential for businesses looking to maintain a competitive edge in
            the digital marketplace.
          </p>
          <p>
            Moreover, the integration of advanced technologies such as AI and
            machine learning into website development has enabled businesses to
            offer personalized experiences to users. This personalization not
            only boosts user engagement but also enhances the chances of
            conversion, proving to be a game-changer for e-commerce platforms.
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
            <h2>Website Development for Business Australia</h2>
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

export default ContentWebsite;
