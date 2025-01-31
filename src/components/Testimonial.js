import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Helmet } from "react-helmet";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      quote:
        "We have used Nextweb for the past few years to host and upgrade all aspects of our website, including emails. Nextweb for the past few years With their assistance, we are now placed on the first page of Google with the clever use of keywords.",
      name: "Jane Doe",
      designation: "CEO, Example Company",
      img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/XBHCoAXFYKuDp49J88cL/media/667caa3a19bb7a57b55758e4.jpeg",
    },
    {
      quote:
        "If you are looking for a good ROI for your online visibility aided by SEO, then consider yourself blessed if it is Nextweb doing the work! They have literally transformed us. Given us a facelift and a much needed makeover!",
      name: "John Smith",
      designation: "Manager, Sample Business",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IuckaP4tbtzJ98VAbnZh_ZertsmWNohRtQ&s",
    },
    {
      quote:
        "When it comes to affordable, quality software development projects, engage the services of Nextweb. We did! And we were not disappointed! We can vouch for Nextweb's engineering excellence and superior technical support.",
      name: "Emma Wilson",
      designation: "Founder, Startup Hub",
      img: "https://img.freepik.com/free-vector/logo-with-abstract-human-form_341269-906.jpg?semt=ais_hybrid",
    },
  ];

  return (
    <div className="container1" id="testimonials">
      {/* Add Bootstrap Icons Link */}
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Helmet>

      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div style={{ margin: "20px" }}>
        {" "}
        {/* Add margin here */}
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slide" style={{ padding: "0px 30px" }}>
              <div
                className="card shadow-sm p-4 rounded testimonial-card"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  transition: "background 0.4s ease",
                }}
              >
                <div className="quotes text-body-tertiary display-2 mb-3 text-center">
                  <i className="bi bi-quote"></i>
                </div>
                <p
                  className="card-text text-center mb-4"
                  style={{ color: "#fff", fontSize: "16px" }}
                >
                  "{testimonial.quote}"
                </p>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h5 className="card-title mb-0 text-center">
                      {testimonial.name}
                    </h5>
                    <span className="text-center" style={{ color: "#ddd" }}>
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  {/* Render 5 stars */}
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="bi bi-star-fill text-warning"
                      style={{ fontSize: "20px", margin: "0 2px" }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
