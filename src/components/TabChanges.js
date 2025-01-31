import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "../App.css";

const TabContent = ({ title, imageUrl, content }) => (
  <Row>
    <Col xs={12} md={6}>
      <p>{content}</p>
    </Col>
    <Col xs={12} md={6}>
      <img src={imageUrl} alt={title} className="img-fluid" />
    </Col>
  </Row>
);

const App = () => {
  const [key, setKey] = useState("tab1");

  const tabsData = [
    {
      eventKey: "tab1",
      title: "What we do",
      imageUrl: "assets/img/tab1.png",
      content: (
        <p style={{ textAlign: "left" }}>
          <h3
            className="homepageheadtwo"
            style={{ fontSize: "25px", fontWeight: "600", lineHeight: "36px" }}
          >
            Nextweb is a pioneer in digital transformation technologies in
            Australia. Passionate about helping businesses win the online
            marketplace.
          </h3>
          <p className="homepagesubheadtwo">
            Nextweb is your digital buddy—an analytics friend, a technology
            partner, a software compass for conquering new online markets, and a
            safety net to build on your hard-earned online domain authority.
          </p>
          <ul className="homepagetwo">
            <li>Android App Development</li>
            <li>iOS App Development</li>
            <li>SEO Development</li>
            <li>Software Development</li>
            <li>Website Development</li>
            <li>E-Commerce Development</li>
          </ul>
        </p>
      ),
    },

    {
      eventKey: "tab2",
      title: "Web Development",
      imageUrl: "assets/img/tab2.png",
      content: (
        <div style={{ textAlign: "left" }}>
          <h3
            className="homepageheadtwo"
            style={{ fontSize: "25px", fontWeight: "600", lineHeight: "36px" }}
          >
            We focus on building intuitive websites and mobile apps that are
            search engine optimized. SEO is one of the least understood and most
            challenging aspects of digital marketing.
          </h3>
          <p className="homepagesubheadtwo">
            Nextweb is always excited about simplifying the SEO process for
            businesses so that their websites rank high on search engines like
            Google.
          </p>
          <ul className="homepagetwo">
            <li>Intuitive Web Designs</li>
            <li>iPhone App Development</li>
            <li>Native Cloud Management</li>
            <li>iPad App Development</li>
            <li>Android App Development</li>
            <li>Hybrid App Development</li>
          </ul>
        </div>
      ),
    },

    {
      eventKey: "tab3",
      title: "Our Team",
      imageUrl: "assets/img/tab3.png",
      content: (
        <div style={{ textAlign: "left" }}>
          <h3
            className="homepageheadtwo"
            style={{ fontSize: "25px", fontWeight: "600", lineHeight: "36px" }}
          >
            Nextweb’s diverse team of digital transformation experts brings
            together a wealth of experience, creativity, and dedication to
            delivering innovative solutions.
          </h3>
          <p className="homepagesubheadtwo">
            We propel businesses by adapting digital transformation technologies
            of the future. Together, we form a cohesive unit driving India’s
            digital transformation landscape and empowering organizations to
            thrive in the digital age.
          </p>
          <ul className="homepagetwo">
            <li>Collaboration & Teamwork</li>
            <li>Proficient Content Writers</li>
            <li>Innovative Mindset</li>
            <li>Experienced Web Developers</li>
            <li>Talented UI/UX Designers</li>
            <li>Skilled App Developers</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Container id="digitransfer">
      {/* Add Header Section Before Tabs */}
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <p>Nextweb Pty Ltd</p>
          <h2
            style={{
              fontFamily: "Oswald",
              fontSize: "40px",
              fontWeight: "400",
            }}
          >
            Pioneering Digital Transformation
            <span className="tabhead"> Efforts for Businesses</span>
          </h2>
        </Col>
      </Row>

      {/* Tab Section */}
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Row>
          <Col xs={12}>
            <Nav variant="pills" className="flex-row mb-3" id="tabnav">
              {tabsData.map((tab, index) => (
                <Nav.Item key={index} id="headcolor">
                  <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col xs={12}>
            <Tab.Content style={{ textAlign: "center" }}>
              {tabsData.map((tab, index) => (
                <Tab.Pane eventKey={tab.eventKey} key={index}>
                  <TabContent
                    title={tab.title}
                    imageUrl={tab.imageUrl}
                    content={tab.content}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default App;
