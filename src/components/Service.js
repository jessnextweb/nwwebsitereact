  import React from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "../App.css";

  const services = [
    {
      id: 1,
      icon: (
        <a href="index.html" className="logo align-items-center">
          <svg
            fill="#ff478d"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ff478d"
            width="50px" height="50px"
          >
            <path d="M216,140H136a4.0002,4.0002,0,0,0-4,4v57.45459a4.00022,4.00022,0,0,0,3.28467,3.93555l80,14.54541A3.99966,3.99966,0,0,0,220,216V144A4.0002,4.0002,0,0,0,216,140Zm-4,71.207-72-13.09082V148h72ZM104,140H40a4.0002,4.0002,0,0,0-4,4v40a3.99983,3.99983,0,0,0,3.28467,3.93555l64,11.63672A4.00033,4.00033,0,0,0,108,195.63674V144A4.0002,4.0002,0,0,0,104,140Zm-4,50.84375L44,180.66164V148h56Zm118.563-153.915a4.00023,4.00023,0,0,0-3.27832-.86426l-80,14.54541A4.00024,4.00024,0,0,0,132,54.54543V112a4.0002,4.0002,0,0,0,4,4h80a4.0002,4.0002,0,0,0,4-4V40A4.001,4.001,0,0,0,218.563,36.92873ZM212,108H140V57.88381L212,44.793ZM103.28467,56.42776l-64,11.63671A3.99985,3.99985,0,0,0,36,72v40a4.0002,4.0002,0,0,0,4,4h64a4.0002,4.0002,0,0,0,4-4V60.3633a4.00031,4.00031,0,0,0-4.71533-3.93554ZM100,108H44V75.3384l56-10.18213Z" />
          </svg>
        </a>
      ),
      heading: "ERP",
      description: "Software",
    },

    {
      id: 2,
    
      icon: (
        <a href="index.html" className="logo align-items-center">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff478d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </a>
      ),
      heading: "E-Commerce",
      description: "Development",
    },
    
    {
    id: 3,
  
    icon: (
      <a href="index.html" className="logo align-items-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ff478d"
          width="50px" height="50px"
        >
          <path
            d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z"
            stroke="#ff478d"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    ),
    heading: "Cloud",
    description: "Computing",
  },

    {
      id: 4,
      
      icon: (
          <a href="index.html" className="logo align-items-center">
            <svg fill="#ff478d" width="50px" height="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#ff478d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3ZM58.91,34.08a38.24,38.24,0,0,0-19.57-1.36,75.27,75.27,0,0,0-3.47-7.93A62.24,62.24,0,0,0,52.3,14.23,26.88,26.88,0,0,1,59,32C59,32.7,59,33.39,58.91,34.08Zm-8-21.31A60.23,60.23,0,0,1,35,23,76.12,76.12,0,0,0,23,6.56a26.94,26.94,0,0,1,28,6.22ZM21,7.36A74.17,74.17,0,0,1,33.1,23.78a59.81,59.81,0,0,1-27.76,4A27.08,27.08,0,0,1,21,7.36ZM5,32c0-.77,0-1.54.1-2.3,2,.19,4,.31,5.94.31a61.79,61.79,0,0,0,23-4.45,73.28,73.28,0,0,1,3.34,7.59A38.51,38.51,0,0,0,13.14,51.3,26.91,26.91,0,0,1,5,32Zm9.66,20.67A36.5,36.5,0,0,1,38,35a74,74,0,0,1,3.94,22,26.92,26.92,0,0,1-27.31-4.42Zm29.28,3.54A76,76,0,0,0,40,34.62a36.23,36.23,0,0,1,18.69,1.49A27.07,27.07,0,0,1,43.93,56.21Z"></path></g></svg>
          </a>
        ),
      heading: "UI/UX",
      description: "Designs",
    },
    {
      id: 5,
    
      icon: (
        <a href="index.html" className="logo align-items-center">
        <svg fill="#ff478d" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ff478d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>brightness-low-keyboard</title> <path d="M6 21.25h-1c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h1c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM27 21.25h-1c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h1c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM7.627 13.668c-0.135-0.131-0.319-0.212-0.523-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.388 0.213 0.523l-0-0 0.933 0.934c0.135 0.131 0.319 0.212 0.523 0.212 0.414 0 0.75-0.336 0.75-0.75 0-0.203-0.081-0.388-0.212-0.523l0 0zM21 21.25h-10c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h10c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM16 11.75c0.414-0 0.75-0.336 0.75-0.75v0-1c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 1c0 0.414 0.336 0.75 0.75 0.75v0zM25.465 13.668c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-0.934 0.934c-0.136 0.136-0.219 0.323-0.219 0.53 0 0.415 0.336 0.751 0.751 0.751 0.208 0 0.395-0.084 0.531-0.22v0l0.934-0.934c0.135-0.136 0.218-0.323 0.218-0.53s-0.083-0.394-0.218-0.53l0 0z"></path> </g></svg>
        </a>
      ),
      heading: "Business Intelligence",
      description: "Solutions",
    },
    {
      id: 6,    
      icon: (
        <a href="index.html" className="logo align-items-center">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff478d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="" stroke-width="0.8879999999999999" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="" stroke-width="0.8879999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
      ),
      heading: "Custom Application",
      description: "Development",
    },
    {
      id: 7,
      
      icon: (
        <a href="index.html" className="logo  align-items-center">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff478d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="" stroke-width="1.248" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>
      ),
      heading: "Artificial Intelligence",
      description: "Projects",
    },
    {
      id: 8,
    
      icon: (
        <a href="index.html" className="logo align-items-center">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff478d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="" stroke-width="1.176"></circle> <path opacity="0.5" d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="" stroke-width="1.176"></path> </g></svg>
        </a>
      ),
      heading: "CRM",
      description: "Implementation",
    },
  ];

  const ServiceItem = ({ number, icon, heading, description }) => (
    <div className="service-item text-center">
      <span className="number d-block mb-2">{number}</span>
      <div className="service-item-icon mb-3">{icon}</div>
      <div className="service-item-content">
        <h3 className="service-heading mb-2">{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );

  const Service = () => {
    const rows = [];
    for (let i = 0; i < services.length; i += 4) {
      rows.push(services.slice(i, i + 4));
    }

    return (
      
      <div className="content">
    <main style={{ textAlign: "center" }}>
      <p className="nwhead" style={{ color: "#ff478d" }}>NEXTWEB PTY LTD</p>
      <h2 className="serviceheading">
        Innovative Digital Products & Services
        <img
          src="../../assets/img/iconidea.png"
          alt="loading animation"
          style={{ width: "43px", height: "43px", marginLeft: "10px" }}
        />
      </h2>

      <p className="servicesubhead">Leader in Website, Mobile App & CRM Development</p>
    </main>

    {/* <Container id="serviceagri" className="py-5">
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {row.map((service) => (
            <Col key={service.id} md={3}>
              <ServiceItem
                number={service.number}
                icon={service.icon}
                heading={service.heading}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container> */}


    <Container>
          {/* <h2 className="section-title text-center">Our Services</h2> */}
          {rows.map((row, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {row.map((service) => (
              <Col key={service.id} md={3}>
                <div className="service-card text-center">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="servicehead">{service.heading}</h4>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          ))}
        </Container>
  </div>

    
    );
  };

  export default Service;



  



