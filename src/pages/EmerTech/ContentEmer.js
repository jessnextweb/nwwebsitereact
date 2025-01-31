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

const ContentEmer = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Emerging Technologies-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            Choosing Nextweb Australia, Australia, means partnering with a team
            that is renowned for providing professional and reliable services in
            emerging technologies. Our local expertise in Australia allows us to
            tailor state-of-the-art solutions like AI-powered solutions,
            intelligent chatbots, personalized user experiences, and smart
            content generation AI-driven analytics, enhanced security, and IoT
            for interconnected systems, which are specifically adapted to meet
            the unique needs of businesses in the region.
          </p>
          <p>
            Emerging technologies are reshaping industries and lifestyles around
            the globe, driving innovations that are profoundly changing the way
            we live, work, and interact. From artificial intelligence (AI) and
            machine learning (ML) to blockchain and the Internet of Things
            (IoT), these technologies are at the forefront of creating more
            efficient, sustainable, and interconnected worlds.As these
            technologies continue to develop and intersect, they pave the way
            for innovative applications that could solve some of today's most
            pressing challenges. The future shaped by emerging technologies
            offers exciting possibilities for advancements in sustainability,
            efficiency, and connectivity.
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
            <h2>Emerging Technologies in Business Australia</h2>
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

export default ContentEmer;
