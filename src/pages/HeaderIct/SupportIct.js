import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const SupportIct = () => {
  return (
    <div className="digital bg-white">
      <div className="container bg-white text-black" id="contentsubpage">
        <h1 className="text-center p-4">
          Comprehensive suite of ICT Professional Services
        </h1>
        {/* <p>
          Our Growth Marketing services are designed to address every facet of
          your business’s online presence and development. We provide a full
          suite of solutions that help businesses achieve sustainable, long-term
          growth in the digital marketplace. Here’s a refined breakdown of what
          we offer:
        </p> */}

        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6" id="supporttwocol">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>
                  IT consulting and Recruitment:
                </h5>
                <p>
                  We offer consulting services that help businesses optimize
                  their technology infrastructure, providing expert advice on
                  maximizing uptime while controlling costs. Our recruitment
                  services ensure you have access to the best IT talent in the
                  industry. IT consulting Australia is widely sought after by
                  businesses looking to optimize their technology
                  infrastructure. Comprehensive IT strategies are provided to
                  help companies improve efficiency, reduce costs, and ensure
                  scalability. By relying on IT consulting Australia services,
                  businesses can access expert guidance on managing and
                  upgrading their IT systems, ensuring seamless integration with
                  their operational goals while staying ahead in the digital
                  landscape.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>
                  Managed ICT Services:
                </h5>
                <p>
                  Our managed services take the burden of day-to-day IT
                  operations off your shoulders, ensuring that your business
                  runs smoothly. We offer continuous monitoring, support, and
                  maintenance. ICT services Australia are trusted by businesses
                  to streamline their technology infrastructure and improve
                  overall efficiency. These services provide innovative
                  solutions that enhance communication and data management,
                  ensuring that businesses can operate smoothly. By leveraging
                  ICT services Australia, companies are able to adopt scalable
                  technologies that promote growth and ensure secure, reliable
                  performance across their operations.
                </p>
              </section>

              {/* <h5>
                <i className="fa-solid fa-circle-check me-2 right"></i>
                Enterprise Resource Planning (ERP) Solutions:
              </h5>
              <p>
                Our ERP solutions in Gold Coast integrate core business
                functions—inventory, supply chain, finance, and HR—into a single
                platform, offering real-time data visibility. This integration
                streamlines processes, reduces redundancy, and provides
                actionable insights, driving smarter business decisions and
                improved efficiency.
              </p> */}
            </div>

            {/* Column 2 */}
            <div className="col-md-6" id="supporttwocol">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>
                  Cloud Solutions:
                </h5>
                <p>
                  Nextweb provides cloud solutions that allow businesses to
                  scale their operations while maintaining flexibility and
                  reducing IT overhead. From cloud migration to security, we
                  have it all covered. Cloud services Australia or Cloud
                  Solutions Australia packages are widely utilized by businesses
                  seeking scalable and flexible solutions for their IT
                  infrastructure. These services provide cost-effective, secure,
                  and efficient access to data and applications, enabling
                  companies to operate more efficiently. With cloud services
                  Australia packages, businesses are ensured seamless
                  integration, reliable performance, and the ability to grow
                  without the limitations of traditional IT systems.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="container my-4">
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="assets/img/swsol1.jpg"
                alt="Service 1"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 1</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/swsol2.jpg"
                alt="Service 2"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 2</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/swsol3.jpg"
                alt="Service 3"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 3</p> */}
            </div>
          </div>
        </div>

        <h5>How to Book Our Services</h5>
        <p>
          Booking a consultation with Nextweb is easy. Simply call us at 1800
          365 247 or visit our office at 103/9 Bay Street Southport, QLD 4215 to
          discuss your business needs. We will provide a customized ICT strategy
          that helps you achieve your digital transformation goals. Book ICT
          Professional Services Australia, Australia.
        </p>
        <ol>
          <li>
            Reach Out: Contact us at{" "}
            <a
              href="tel:1800365247"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
              }}
            >
              1800 365 247
            </a>{" "}
            or{" "}
            <a
              href="tel:1800365247"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
              }}
            >
              visit us at 103/9 Bay Street Southport, QLD 4215.
            </a>
          </li>
          <li>
            {" "}
            We will provide a customized ICT strategy that helps you achieve
            your digital transformation goals.
          </li>
          <li>Book ICT Professional Services Australia, Australia.</li>
        </ol>

        <h5>FAQs</h5>
        <div className="pb-4 pt-3">
          <Accordion style={{ backgroundColor: "#f8f9fa" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{}}>
                What is the cost of ICT Professional Services in Australia?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f9fa" }}>
                The cost varies depending on the services required, such as
                managed IT support or cloud solutions. We offer customized plans
                to fit every business's budget.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Do professional ICT service providers in Australia use
                user-centric solutions?
              </Accordion.Header>
              <Accordion.Body>
                Yes, at Nextweb, we prioritize user-centric, scalable solutions
                that are secure and designed to meet the specific needs of your
                business.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the best practice for ICT Professional Services in
                Australia?
              </Accordion.Header>
              <Accordion.Body>
                Best practices include regular IT assessments, implementing
                cloud strategies, and maintaining cyber security measures
                tailored to your business's unique needs.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <section>
      <p>Choosing Nextweb Gold Coast for your Software Development & Consulting Services guarantees that you are working with a local expert who understands the unique needs of businesses in the Gold Coast area.
      </p>
      <p>Whether it’s enhancing your online presence or safeguarding your business against cyber threats, Nextweb is here to provide reliable, professional solutions.
      </p>
      <p>Contact us today at 1800 365 247 or visit us at 103/9 Bay Street Southport, QLD 4215 to learn more about how our services can benefit your business.
      </p>
      </section> */}
      </div>
    </div>
  );
};

export default SupportIct;
