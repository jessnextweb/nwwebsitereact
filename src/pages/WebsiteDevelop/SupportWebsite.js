import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const SupportWebsite = () => {
  return (
    <div className="digital bg-white">
      <div className="container bg-white text-black" id="contentsubpage">
        <h1 className="text-center p-4" id="supporthead">
          Comprehensive Website Development Services in Australia
        </h1>
        <p>
          At Nextweb Australia, we offer a comprehensive range of website
          development and web design services, including both front-end and
          back-end development, to help your business succeed online. Our
          services ensure that every aspect of your website, from the user
          interface to the server-side functionality, operates seamlessly and
          delivers a superior user experience.
        </p>

        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6" id="supporttwocol">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> Custom
                  & Responsive Website Design:
                </h5>
                <p>
                  Our custom website design Australia services ensure your site
                  is visually appealing and optimized for all devices. This
                  front-end development process ensures a seamless experience
                  across desktops, tablets, and mobiles. A responsive website is
                  key to keeping users engaged and converting them into loyal
                  customers.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>CMS
                  Development (WordPress, Joomla, etc.):
                </h5>
                <p>
                  Our CMS website development solutions streamline back-end
                  development to make managing your website simple. Whether it’s
                  WordPress or Joomla, our CMS systems allow you to update and
                  manage content effortlessly, with features such as easy
                  drag-and-drop functionality and plugin integration, enhancing
                  both front-end and back-end performance.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> Web
                  Hosting & Domain Services:
                </h5>
                <p>
                  Reliable hosting is essential for ensuring your website runs
                  smoothly. Our affordable web hosting Australia services
                  guarantee that your site stays fast and secure, while our
                  back-end services ensure server-side optimization for better
                  performance and uptime.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Website Maintenance & Support:
                </h5>
                <p>
                  Keeping your website secure and updated is critical. Our
                  website maintenance Australia services provide ongoing
                  back-end support, including security patches, content updates,
                  and performance monitoring, ensuring that both front-end
                  functionality and back-end systems remain optimized and
                  secure.
                </p>
              </section>
            </div>

            {/* Column 2 */}
            <div className="col-md-6" id="supporttwocol">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>UI/UX
                  Design:
                </h5>
                <p>
                  User interface and user experience design are critical
                  elements of front-end development. Our UI/UX design Australia
                  services focus on creating intuitive, visually appealing
                  interfaces that guide users effortlessly through your site,
                  improving customer engagement and conversion rates.
                </p>
              </section>

              <p>
                By offering a range of website development Australia services,
                we ensure that your business has a strong, responsive, and
                engaging digital presence.
              </p>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>Web
                  Application Development
                </h5>
                <p>
                  Whether you need a full website or advanced applications, our
                  web application development services combine both front-end
                  and back-end development to create dynamic web applications
                  that are secure, scalable, and optimized for user engagement.
                  These solutions streamline operations, improve customer
                  interactions, and ensure smooth data handling.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>Mobile
                  Website Creation:
                </h5>
                <p>
                  Mobile responsiveness is more important than ever. Our mobile
                  web design services in Australia ensure that your website's
                  front-end development is optimized for smartphones and
                  tablets, capturing mobile traffic and providing a seamless
                  mobile user experience.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div
          className="container my-4"
          style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}
        >
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="assets/img/webdevelop1.jpg"
                alt="Service 1"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 1</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/webdevelop2.jpg"
                alt="Service 2"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 2</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/webdevelop3.jpg"
                alt="Service 3"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 3</p> */}
            </div>
          </div>
        </div>

        <h5>How to Book Our Website Development Services in Australia</h5>
        <p>
          Booking website development or web design services with Nextweb
          Australia is simple:
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
            Consultation: We’ll arrange a free consultation to understand your
            specific website needs.
          </li>
          <li>
            Service Plan: After our initial meeting, we’ll create a custom plan
            that outlines the software development services you need.
          </li>
          <li>
            Implementation: Our team will begin the development process,
            ensuring seamless integration with your existing systems.
          </li>
        </ol>

        <h5>FAQs</h5>
        <div className="pb-4 pt-3">
          <Accordion style={{ backgroundColor: "#f8f9fa" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{}}>
                What is the cost of Software Development & Consulting Services
                in Australia?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f9fa" }}>
                Costs vary depending on the complexity and scope of the project.
                We provide competitive pricing tailored to your business needs.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Do professional Software Development providers in Australia
                offer custom solutions?
              </Accordion.Header>
              <Accordion.Body>
                Yes, at Nextweb, we specialize in offering tailored solutions
                designed specifically for your business processes and goals.{" "}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the best practice for software development in Australia?
              </Accordion.Header>
              <Accordion.Body>
                Best practices include working with a trusted local provider
                like Nextweb, which ensures that your software is secure,
                scalable, and aligned with your business goals.
              </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey="3">
              <Accordion.Header>
                What are the best practices for website development in
                Australia?
              </Accordion.Header>
              <Accordion.Body>
                We follow best practices like responsive design, SEO
                optimization, and intuitive navigation, ensuring your website
                performs well and meets business goals.
              </Accordion.Body>
            </Accordion.Item> */}
          </Accordion>
        </div>
        <section>
          <p>
            Choosing Nextweb Australia for your Software Development &
            Consulting Services guarantees that you are working with a local
            expert who understands the unique needs of businesses in the
            Australia area.
          </p>
          <p>
            Whether it’s enhancing your online presence or safeguarding your
            business against cyber threats, Nextweb is here to provide reliable,
            professional solutions.
          </p>
          <p>
            Contact us today at 1800 365 247 or visit us at 103/9 Bay Street
            Southport, QLD 4215 to learn more about how our services can benefit
            your business.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SupportWebsite;
