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

const ContentOnline = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/Online Marketing-1.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            At Nextweb, we pride ourselves on delivering professional and
            reliable online marketing services that cater specifically to the
            businesses of Australia. We understand the local market's unique
            challenges, such as increased competition and the need for more
            visibility online. Our team of experts tailors digital marketing
            strategies to your business needs, ensuring that you reach your
            target audience effectively.
          </p>
          <p>
            There's a growing trend towards sustainability and ethics in
            marketing. Consumers are increasingly drawn to brands that commit to
            environmentally friendly practices and demonstrate social
            responsibility. Australian marketers are responding by integrating
            these values into their brand messaging, emphasizing transparency,
            and engaging in community-oriented projects. These key areas are
            shaping the online marketing strategies of Australian businesses,
            helping them to not only meet the evolving expectations of consumers
            but also to forge stronger connections that drive loyalty and growth
            in a competitive digital landscape.
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
            <h2>Online / Growth Marketing Australia</h2>
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

export default ContentOnline;
