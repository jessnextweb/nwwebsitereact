import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseSeo = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Here’s why you should choose us:</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              Investing in professional SEO services Australia is one of the
              most effective ways to grow your business online. Here are some of
              the benefits you’ll enjoy when you choose Nextweb:
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/SEO-2.jpg"
                alt="Transparent Service"
                className="img-fluid top-image"
                style={{
                  maxWidth: "100%",
                  borderRadius: "5%",
                  width: "600px",
                  height: "500px",
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} id="contentcol" className="contentchoosepage">
            <h4
              className="mt-3 mb-2"
              style={{ fontFamily: "Oswald", fontSize: "1.25rem" }}
            >
              <i className="fa-solid fa-circle-check me-3 right"></i> Increased
              Organic Traffic:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Targeting the right keywords helps drive more qualified visitors
              to your site.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Better User
              Experience:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              We ensure your website is fast, mobile-friendly, and easy to
              navigate, which not only helps with SEO but also improves user
              engagement
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Expert SEO
              Australia:
            </h4>
            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              Our team has years of experience dealing with the unique
              challenges businesses face on the Australia, from local
              competition to industry-specific trends.
            </p>
            <h4 className="mt-3 mb-2" id="chooselisthead">
              <i className="fa-solid fa-circle-check me-3 right"></i>Improved
              Local Presence:
            </h4>

            <p className="mb-4" style={{ paddingLeft: "40px" }}>
              With our local SEO services, your business will appear in local
              search results, reaching customers nearby.
            </p>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col xs={12}>
            {" "}
            <p className="contentchoosepage">
              {" "}
              Contact us:
              <strong> 1800 365 247</strong> to learn more about how we can help
              your business grow.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseSeo;
