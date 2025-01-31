import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../App.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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

  const cards = [
    {
      name: "User Experience Design",
      description: `
         User-Friendly Interface
         360-Degree Customer View
         Contact Management
         Sales and Pipeline Management
         Automation and Workflow
      `,
      backgroundImage:
        "https://via.placeholder.com/600x400.png?text=Background+1",
      icon: "assets/img/flow-chart.png", // Unique icon
    },
    {
      name: "Web Development",
      description: `
         Scalable Applications
         SEO-Optimized Websites
         Cross-Platform Solutions
         Performance Optimization
         Modern Frameworks
      `,
      backgroundImage:
        "https://via.placeholder.com/600x400.png?text=Background+2",
      icon: "assets/img/branding.png", // Unique icon
    },
    {
      name: "Custom Application Development",
      description: `
         Tailored Solutions
         Business Automation
         Secure Applications
         Cloud Integration
         Data Analytics
      `,
      backgroundImage:
        "https://via.placeholder.com/600x400.png?text=Background+3",
      icon: "assets/img/website.png", // Unique icon
    },
  ];

  return (
    <div id="home" className="cardslidehome">
      <div
        className="container"
        id="card-slider"
        // style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
      >
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "Oswald", fontSize: "45px", fontWeight: "400" }}
        >
          What we do
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12 sample">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="mb-3" // Add Bootstrap margin-bottom for all cards
                  style={{
                    padding: "0px 15px",
                    backgroundImage: `url(${card.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                  }}
                >
                  <div
                    className="card shadow-sm p-4 rounded pb-md-3 pb-lg-0" // Add padding-bottom for small screens
                    id="whatwedo"
                    style={{
                      padding: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="card-body text-center">
                      <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ marginBottom: "10px" }}
                      >
                        <img
                          src={card.icon}
                          alt={`${card.name} Icon`}
                          style={{
                            width: "48px",
                            height: "48px",
                            filter:
                              "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))",
                          }}
                        />
                        <img
                          src="assets/img/next.png"
                          alt="Pencil Icon"
                          style={{
                            width: "28px",
                            height: "28px",
                            color:
                              "linear-gradient(to right, rgb(155, 39, 176), rgb(255, 71, 141))",
                          }}
                        />
                      </div>
                      <h5
                        className="card-title mt-2"
                        style={{
                          color: "#fff",
                          fontFamily: "Oswald",
                          fontSize: "25px",
                        }}
                      >
                        {card.name}
                      </h5>
                      <ul
                        className="card-text text-start"
                        style={{
                          paddingLeft: "1.5rem",
                          listStyle: "none",
                          color: "#fff",
                          marginTop: "15px",
                          fontFamily: "Questrial",
                        }}
                      >
                        {card.description
                          .split("\n")
                          .filter((item) => item.trim() !== "")
                          .map((item, idx) => (
                            <li
                              key={idx}
                              style={{
                                marginBottom: "10px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  marginRight: "10px",
                                  background:
                                    "linear-gradient(to right, rgb(155, 39, 176), rgb(255, 71, 141))",
                                  borderRadius: "50%",
                                }}
                              ></span>
                              {item.replace(/^- /, "").trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-2 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/6-Shape-logo.png"
              alt="Shape Logo"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
