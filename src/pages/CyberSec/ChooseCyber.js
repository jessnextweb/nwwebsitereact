import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ChooseCyber = () => {
  return (
    <div className="choosedigi">
      <Container>
        {/* Header Section */}
        <Row className="text-center">
          <Col xs={12}>
            <p>Nextweb Pty Ltd</p>
            <h2>Why Choose Nextweb Australia for IT Services?</h2>
          </Col>
        </Row>

        {/* Content Section */}
        <Row className="mb-2">
          <Col xs={12}>
            <p className="contentchoosepage">
              Choosing Nextweb means partnering with a company that understands
              the unique IT challenges faced by businesses in Australia. Our
              managed IT services not only offer remote and onsite support but
              are designed to proactively manage your entire IT infrastructure.
              With our 24/7 monitoring and rapid response capabilities, we
              ensure your systems remain operational, secure, and scalable.
            </p>
          </Col>
        </Row>

        {/* Deep Local Expertise */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <div className="image-stack">
              <img
                src="assets/img/Cyber Security Services-2.jpg"
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
            <h5>Key Benefits of Choosing Nextweb:</h5>
            <p></p>
            {/* <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-3 right"></i> Tailored
              Solutions:
            </h5> */}
            <p className="mb-4">
              By investing in expert Cyber Security Services Australia,
              businesses can protect themselves from data breaches,
              cyber-attacks, and other online threats. Nextweb's professional
              services help businesses in Australia maintain their digital
              infrastructure's integrity, allowing them to focus on growth
              without worrying about cyber threats.
            </p>
            {/* <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-3 right"></i>
              Proactive Management:
            </h5> */}
            <p className="mb-4">
              With increasing reliance on online operations, the businesses in
              Australia face specific challenges such as protecting customer
              data, ensuring regulatory compliance, and maintaining the
              integrity of online transactions. Nextweb’s expert Cyber Security
              Services are designed to address these challenges and provide
              businesses with the tools they need to thrive in Australia’s
              digital age.
            </p>
            {/* <h5 mt-3 mb-2>
              <i className="fa-solid fa-circle-check me-3 right"></i>
              Local Expertise:
            </h5> */}
            <p className="mb-4">
              Our services don’t just safeguard your operations—they help you
              grow by fostering trust and reliability in your business. With
              comprehensive solutions, we help overcome the most significant
              cyber security obstacles in Australia, keeping your operations
              running smoothly and efficiently.
            </p>

            {/* <h5 mt-3 mb-2>
              <i class="fa-solid fa-circle-check me-3 right"></i>Transparent and
              Reliable Service:
            </h5>
            <p className="mb-4">
              Our clients trust us because we believe in transparency. We
              provide regular reports, clear communication, and measurable
              results. You’ll always know where your marketing dollars are
              going, and you can trust that our strategies are built with
              long-term success in mind.
            </p> */}
            {/* <p className="contentchoosepage">
              {" "}
              With Nextweb, you’re not just getting an IT provider; you’re
              gaining a strategic partner that will help your business grow and
              thrive in the digital landscape.Contact us today: Phone:
              <strong> 1800 365 247</strong> or visit our office at{" "}
              <strong>103/9 Bay Street Southport, QLD 4215</strong>
            </p> */}
          </Col>
        </Row>

        {/* Contact Section */}
        {/* <Row>
        <Col xs={12}>
          <p>
            For businesses seeking professional digital marketing in Goldcoast,
            Australia, Nextweb is committed to delivering outstanding results
            that propel your business forward. Reach us at{" "}
            <strong>1800 365 247</strong> or visit our office at{" "}
            <strong>103/9 Bay Street Southport, QLD 4215</strong> to learn more
            about how we can help.
          </p>
        </Col>
      </Row> */}
      </Container>
    </div>
  );
};

export default ChooseCyber;
